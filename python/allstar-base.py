class AllStar:

    def __init__(self):
        self.mould_broke = False
        self.is_rockstar = False

    def become_rockstar(self):
        self.is_rockstar = True

    def can_break_mould(self):
        return self.is_rockstar