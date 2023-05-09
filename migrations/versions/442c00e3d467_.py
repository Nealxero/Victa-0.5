"""empty message
Revision ID: 442c00e3d467
Revises: 2db03dbc9555
Create Date: 2022-10-27 16:57:47.398699
"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '442c00e3d467'
down_revision = '2db03dbc9555'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'prueba', ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'prueba', type_='unique')
    # ### end Alembic commands ###