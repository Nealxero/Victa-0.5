"""empty message

Revision ID: 19078850aecc
Revises: 1ecfbc16118f
Create Date: 2022-09-19 19:31:50.575874

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '19078850aecc'
down_revision = '1ecfbc16118f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'daily_plan', ['id'])
    op.create_unique_constraint(None, 'meal', ['id'])
    op.create_unique_constraint(None, 'user', ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_constraint(None, 'meal', type_='unique')
    op.drop_constraint(None, 'daily_plan', type_='unique')
    # ### end Alembic commands ###
