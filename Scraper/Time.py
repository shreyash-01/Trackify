from datetime import datetime
import pytz


def get_time() -> str:
    now_in_india = datetime.now(pytz.timezone('Asia/Kolkata'))
    formatted_now = now_in_india.strftime('%Y-%m-%d %H:%M:%S')
    return formatted_now
