import re


class MarkovChain:
    def __init__(self):
        self.tree = dict()

    def train(self, text, factor=1):
        words = filter(lambda s: len(s) > 0, re.split(r'[\s]', text))
        words = [w.lower() for w in words]

        for a, b in [(words[i], words[i + 1]) for i in range(len(words) - 1)]:
            if a not in self.tree:
                self.tree[a] = dict()

            self.tree[a][b] = factor if b not in self.tree[a] else self.tree[a][b] + \
                self.tree[a][b] * factor
