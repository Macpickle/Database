from typing import Optional
from pydantic import BaseModel
import json


class userItem(BaseModel):
    user_name: str
    user_pass: str
    user_email: str
    




# Extras For CLI interaction:

