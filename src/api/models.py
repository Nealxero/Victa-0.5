from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import event
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import backref
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

# Relationships --> https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships

MAX_DAILY_PLANS = 7


class User(db.Model, SerializerMixin):
    serialize_only = ('id', 'username', 'email', "password",
                      'daily_plans.id', 'daily_plans.name')
    id = db.Column(db.Integer, unique=True, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    # Relationships
    daily_plans = db.relationship(
        'DailyPlan', backref='User')
    meals = db.relationship('Meal', backref=backref(
        'User', uselist=False), lazy='dynamic')

    def __repr__(self):
        return f'<User {self.email}>'

    @classmethod
    def signup(cls, email, password, username):
        instance = cls(
            username=username,
            email=email,
            password=password
        )
        if isinstance(instance, cls):
            return instance
        else:
            return None

    @classmethod
    def login(cls, email, password):
        user_data = cls.query.filter_by(
            email=email
        ).one_or_none()
        if (not isinstance(user_data, cls)):
            return user_data
        if user_data.password == password:
            return user_data
        else:
            return False


first_block = db.Table('first_block',
                       db.Column('daily_plan_id', db.Integer,
                                 db.ForeignKey('daily_plan.id')),
                       db.Column('meal_id', db.Integer,
                                 db.ForeignKey('meal.id'))

                       )
second_block = db.Table('second_block',
                        db.Column('daily_plan_id', db.Integer,
                                  db.ForeignKey('daily_plan.id')),
                        db.Column('meal_id', db.Integer,
                                  db.ForeignKey('meal.id'))
                        )
third_block = db.Table('third_block',
                       db.Column('daily_plan_id', db.Integer,
                                 db.ForeignKey('daily_plan.id')),
                       db.Column('meal_id', db.Integer,
                                 db.ForeignKey('meal.id'))
                       )

TYPES = [
    ('monday', 'Monday'),
    ('tuesday', 'Tuesday'),
    ('wednesday', 'Wednesday'),
    ('thursday', 'Thursday'),
    ('friday', 'Friday'),
    ('saturday', 'Saturday'),
    ('sunday', 'Sunday'),

]


class DailyPlan(db.Model, SerializerMixin):
    serialize_only = ('id', 'name', 'first_block.id', 'first_block.name',
                      'second_block.id', 'second_block.name', 'third_block.id', 'third_block.name')
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String(120), nullable=True)
    first_block = db.relationship(
        'Meal', secondary=first_block, backref='Breakfast')
    second_block = db.relationship(
        'Meal', secondary=second_block, backref='Lunch')
    third_block = db.relationship(
        'Meal', secondary=third_block, backref='Dinner')

    # Relationships
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'DailyPlan( id : "{str(self.id)}",  first_block : "{str(self.first_block)}", second_block : "{str(self.second_block)}",  third_block : "{str(self.third_block)}")'


@event.listens_for(DailyPlan.user_id, 'set', retval=True)
def plans_per_user_check(target, value, oldvalue, initiator):
    if value is not None:
        plans_count = DailyPlan.query.filter_by(user_id=value).count()
        if plans_count >= MAX_DAILY_PLANS:
            orig = Exception('Maximum number of Daily plans ({}) '
                             'reached for User.id = {}'
                             .format(MAX_DAILY_PLANS, value))
            msg = "Record Not Committed"
            raise IntegrityError(msg, ';)', orig)
    return value


class Meal(db.Model, SerializerMixin):
    serialize_only = ('id', 'name', 'sumarize', 'favorite')
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    sumarize = db.Column(db.String(120), unique=False)
    nutrients = db.Column(db.String(80), unique=False)
    ingredients = db.Column(db.String(80), unique=False)
    favorite = db.Column(db.Boolean, default=False)
    # Relationships
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    daily_plan_id = db.Column(db.Integer, db.ForeignKey('daily_plan.id'))

    def __repr__(self):
        return f'Meal( id : "{str(self.id)}",  name : "{str(self.name)}", sumarize : "{str(self.sumarize)}",  nutrients : "{str(self.nutrients)}",  ingredients : "{str(self.ingredients)}")'

    @classmethod
    def create(cls, name, sumarize, nutrients, ingredients, favorite):
        instance = cls(
            name=name,
            sumarize=sumarize,
            nutrients=nutrients,
            ingredients=ingredients,
            favorite=favorite,
            user_id=user_id,
            daily_plan_id=daily_plan_id,
        )
        if isinstance(instance, cls):
            return instance
        else:
            return None


#                        Dont know if necessary

#   id = db.Column(db.Integer, primary_key=True)
# def __repr__(self):
#       return { "id": self.id}
# def serialize(self): return {}
