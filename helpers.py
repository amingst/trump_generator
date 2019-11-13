import re


def clean_urls(filepath):
    tweets = open(filepath, encoding='utf-8').read()
    tweets = re.sub(
        r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', '', tweets, flags=re.MULTILINE)

    return tweets
