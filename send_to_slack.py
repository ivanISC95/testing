from slack_sdk import WebClient
import os

slack_token = os.environ['SLACK_BOT_TOKEN']
channel_id = os.environ['SLACK_CHANNEL_ID']

from_name = os.environ.get("GITHUB_ACTOR", "desconocido")
commit_msg = os.environ.get("COMMIT_MESSAGE", "Sin mensaje")

client = WebClient(token=slack_token)

client.chat_postMessage(
    channel=channel_id,
    text=f"🚀 Nuevo push por *{from_name}*\n📝 Commit: {commit_msg}"
)
