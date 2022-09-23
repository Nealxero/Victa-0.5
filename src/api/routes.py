"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, redirect, session
from api.models import db, User, Meal
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def show_users():
    try:
        users = User.query.all()
        all_users_ll = []
        for user in users:
            all_users_ll.append({
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'url': f'api/user/{user.id}'
            })
        return jsonify(all_users_ll), 200
    except Exception as error:
        return jsonify("Something wen't wrong, try again", print(error)), 400


@api.route('/user/<user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.filter_by(id=user_id).one_or_none()
    try:
        user_final = ({
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'daily_plans': f'./api/user/{user.id}/daily_meals',
            'favorites': f'./api/user/{user.id}/favorites'

        })
        return jsonify(user_final), 200
    except Exception as error:
        return jsonify("This user doesn't exists", print(error)), 400


DAYS_OF_THE_WEEK = {
    'monday': 'Monday',
    'tuesday': 'Tuesday',
    'wednesday': 'Wednesday',
    'thursday': 'Thursday',
    'friday': 'Friday',
    'saturday': 'Saturday',
    'sunday': 'Sunday'
}


@api.route('/signup', methods=['POST'])
def create_new_user():
    user_email = request.json.get('user-email', None)
    user_password = request.json.get('user-password', None)
    user_username = request.json.get('user-name', None)
    user = User.signup(password=user_password,
                       email=user_email, username=user_username)
    db.session.add(user)
    db.session.commit()

    if user is not None:
        print(user)
        return jsonify({"message": "User created succesfully!"}), 201
    else:
        return jsonify({"message": "Something went wrong, Try again!"}), 500


@api.route('/login', methods=['POST'])
def user_login():
    email = request.json.get('user-email', None)
    password = request.json.get('user-password', None)
    print(request.json)
    user = User.query.filter_by(email=email, password=password).one_or_none()
    if user is None:
        return jsonify({"msg": "Something went wrong, please try again!"}), 401

    # token
    access_token = create_access_token(identity=user.email)
    return jsonify({"token": access_token, "user_id": user.id, "email": user.email})


@api.route('/forgot-password', methods=['POST'])
def password_password():

    user_email_to_reset = request.json.get('user-email', None)

    user = User.query.filter_by(email=email).one_or_none()

    hashed_token = create_access_token(identity=email)

    user.reset_token = hashed_token

    db.session.add(user)
    db.session.commit()

    # Then we need to send the random code to the user

    # token
    return jsonify({"token": access_token, "user_id": user.id, "email": user.email})


@api.route('/reset-password', methods=['GET'])
@jwt_required()
def reset_password():
    identity = get_jwt_identity()
    user_password = request.json.get('user-password', None)
    user = User.query.filter_by(email=identity).one_or_none()
    user.password = new_password

    db.session.update(user.password)
    db.session.commit()
    return jsonify(user=user.to_dict()), 200

    # 1. We need to get the token from the request (Headers or body)
    # 2. We check if that user is allowed to perform the operaion
    # 3. We get the email by using the get_jwt_identity
    # 4. We find the user in the db and udpate the password


@api.route('/logout', methods=['DELETE'])
def user_logout():
    session.pop("email", None)
    if user is None:
        return jsonify({"msg": " Succesfully Logged out "})
    return redirect(url_for("login"))

    # -------------------------- MEALS -----------------------


@api.route('/meals', methods=['GET'])
def meal_list():
    meal = Meal.query.all()
    response_body_meal = list(map(lambda s: s.serialize(), meal))
    return jsonify(response_body_meal, print(error)), 200


@api.route('/meals/<meal_id>', methods=['GET'])
def get_meal_by_id(meal_id):
    meal = Meal.query.filter_by(id=meal_id).one_or_none()

    try:
        meal_final = ({
            'id': meal.id,
            'name': meal.name,
            'sumarize': meal.sumarize,
            'nutrients': meal.nutrients

        })
        return jsonify(meal_final), 200
    except Exception as error:
        return jsonify("This meal doesn't exists", print(error)), 400

# --------------   User's Favorites --------------------------------


@api.route('/user/<user_id>/favorites', methods=['GET'])
def get_user_favorites(user_id):
    user = User.query.filter_by(id=user_id).one_or_none()

    try:
        user_final = ({
            'id': user.id,
            'username': user.username,
            'favorites': []
        })

        for fav in user.favorites:
            user_final['favorites'].append({
                'id': fav.id,
                'name': fav.name,
                'sumarize': fav.sumarize,
                'nutrients': fav.nutrients,
                'ingredients': fav.ingredients,
            })

        return jsonify(user_final), 200
    except Exception as error:
        return jsonify("This user doesn't have favorites", print(error)), 400

# --------------   User's Daily plan --------------------------------


@api.route('/user/<user_id>/daily_meals', methods=['GET'])
def get_user_daily_plan(user_id):
    try:
        user = User.query.filter_by(id=user_id).one_or_none()
        return jsonify(user.to_dict()), 200
    except Exception as error:
        return jsonify("This user doesn't have daily meals", print(error)), 400

# ---------------- Update User Data --------------------


@api.route('/user/<user_id>/private', methods=['PUT'])
def user_update_email(user_id):
    try:
        user = User.query.get(id)
        if not user:
            return jsonify({"msg": "No user was found"}), 404
        email = request.json.get('user-email')
        db.session.update(user.email)
        db.session.commit()
        return jsonify(user.serialize()), 200
    except Exception as error:
        return jsonify("This user doesn't exist", print(error)), 400 ###

@api.route('/user/<user_id>/private', methods=['PUT'])
def user_update_password(user_id):
    try:
        user = User.query.get(id)
        if not user:
            return jsonify({"msg": "No user was found"}), 404
        password = request.json.get('user-password')
        db.session.update(user.password)
        db.session.commit()
        return jsonify(user.serialize()), 200
    except Exception as error:
        return jsonify("This user doesn't exist", print(error)), 400 ###