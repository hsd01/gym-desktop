"""from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Member"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Member

router = APIRouter(prefix="/members")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_members(db: Session = Depends(get_db)):
    return db.query(Member).all()


@router.post("/")
def add_member(member: dict, db: Session = Depends(get_db)):
    m = Member(**member)
    db.add(m)
    db.commit()
    return {"message": "Member added"}