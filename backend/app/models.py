from sqlalchemy import Column, Integer, String, Date, Float
from app.database import Base

from sqlalchemy import Column, Integer, String, Date, Float
from app.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String(100), unique=True)
    password = Column(String(255))


class Member(Base):
    __tablename__ = "members"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    phone = Column(String(15))
    plan = Column(String(50))
    expiry_date = Column(Date)


class Payment(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True)
    member_id = Column(Integer)
    amount = Column(Float)