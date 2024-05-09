
from contextlib import closing
from enum import Enum
from sqlite3 import connect
from h11 import Data
from selenium import webdriver

db_path = "./mhrise.db"


class DataNames(Enum):
    GREATSWORD = "Great Sword"
    SWORD_AND_SHIELD = "Sword & Shield"
    DUAL_BLADES = "Dual Blades"
    LONG_SWORD = "Long Sword"
    HAMMER = "Hammer"
    HUNTING_HORN = "Hunting Horn"
    LANCE = "Lance"
    GUNLANCE = "Gunlance"
    SWITCH_AXE = "Switch Axe"
    CHARGE_BLADE = "Charge Blade"
    INSECT_GLAIVE = "Insect Glaive"
    BOW = "Bow"
    HEAVY_BOWGUN = "Heavy Bowgun"
    LIGHT_BOWGUN = "Light Bowgun"
    SMALL_MONSTERS = "Small Monsters"
    LARGE_MONSTERS = "Large Monsters"
    CONSUMABLE = "Consumable"
    MATERIALS = "Materials"
    SCRAPS = "Scraps"
    AMMO_COATINGS = "Ammo/Coatings"
    DELIVERIES = "Deliveries"
    ROOM_CUSTOMIZATION = "Room Customization"
    EVENT_QUESTS = "Event Quests"
    ANOMALY_QUESTS = "Anomaly Quests"
    FOLLOWER_COLLAB_QUESTS = "Follower Collab Quests"
    HUB_QUESTS_MASTER_RANK = "Hub Quests: Master Rank"
    HUB_QUESTS_HIGH_RANK = "Hub Quests: High Rank"
    HUB_QUESTS_LOW_RANK = "Hub Quests: Low Rank"
    VILLAGE_QUESTS = "Village Quests"
    ARENA_QUESTS = "Arena Quests"
    TRAINING_QUESTS = "Training Quests"
    SKILLS = "Skills"
    RAMPAGE_SKILLS = "Rampage Skills"

    def __str__(self):
        return self.value


armor_url = [
    f"https://mhrise.kiranico.com/data/armors?view={i}" for i in range(0, 10)]

weapon_url = {DataNames.GREATSWORD: "https://mhrise.kiranico.com/data/weapons?view=0",
              DataNames.SWORD_AND_SHIELD: "https://mhrise.kiranico.com/data/weapons?view=1",
              DataNames.DUAL_BLADES: "https://mhrise.kiranico.com/data/weapons?view=2",
              DataNames.LONG_SWORD: "https://mhrise.kiranico.com/data/weapons?view=3",
              DataNames.HAMMER: "https://mhrise.kiranico.com/data/weapons?view=4",
              DataNames.HUNTING_HORN: "https://mhrise.kiranico.com/data/weapons?view=5",
              DataNames.LANCE: "https://mhrise.kiranico.com/data/weapons?view=6",
              DataNames.GUNLANCE: "https://mhrise.kiranico.com/data/weapons?view=7",
              DataNames.SWITCH_AXE: "https://mhrise.kiranico.com/data/weapons?view=8",
              DataNames.CHARGE_BLADE: "https://mhrise.kiranico.com/data/weapons?view=9",
              DataNames.INSECT_GLAIVE: "https://mhrise.kiranico.com/data/weapons?view=10",
              DataNames.BOW: "https://mhrise.kiranico.com/data/weapons?view=11",
              DataNames.HEAVY_BOWGUN: "https://mhrise.kiranico.com/data/weapons?view=12",
              DataNames.LIGHT_BOWGUN: "https://mhrise.kiranico.com/data/weapons?view=13"}

monster_url = {DataNames.SMALL_MONSTERS: "https://mhrise.kiranico.com/data/monsters?view=sm",
               DataNames.LARGE_MONSTERS: "https://mhrise.kiranico.com/data/monsters?view=lg"}

item_url = {DataNames.CONSUMABLE: "https://mhrise.kiranico.com/data/items?view=consume",
            DataNames.MATERIALS: "https://mhrise.kiranico.com/data/items?view=material",
            DataNames.SCRAPS: "https://mhrise.kiranico.com/data/items?view=scrap",
            DataNames.AMMO_COATINGS: "https://mhrise.kiranico.com/data/items?view=ammo",
            DataNames.DELIVERIES: "https://mhrise.kiranico.com/data/items?view=account",
            DataNames.ROOM_CUSTOMIZATION: "https://mhrise.kiranico.com/data/items?view=antique"}

quest_url = {DataNames.EVENT_QUESTS: "https://mhrise.kiranico.com/data/quests?view=village",
             DataNames.ANOMALY_QUESTS: "https://mhrise.kiranico.com/data/quests?view=hub",
             DataNames.FOLLOWER_COLLAB_QUESTS: "https://mhrise.kiranico.com/data/quests?view=arena",
             DataNames.HUB_QUESTS_MASTER_RANK: "https://mhrise.kiranico.com/data/quests?view=event",
             DataNames.HUB_QUESTS_HIGH_RANK: "https://mhrise.kiranico.com/data/quests?view=village",
             DataNames.HUB_QUESTS_LOW_RANK: "https://mhrise.kiranico.com/data/quests?view=village",
             DataNames.VILLAGE_QUESTS: "https://mhrise.kiranico.com/data/quests?view=village",
             DataNames.ARENA_QUESTS: "https://mhrise.kiranico.com/data/quests?view=village",
             DataNames.TRAINING_QUESTS: "https://mhrise.kiranico.com/data/quests?view=village", }

skill_url = {DataNames.SKILLS: "https://mhrise.kiranico.com/data/skills",
             DataNames.RAMPAGE_SKILLS: "https://mhrise.kiranico.com/data/rampage-skills"}

decoration_url = "https://mhrise.kiranico.com/data/decorations"


def execute_sql(sql, values=None, db_path=db_path):
    with closing(connect(db_path)) as con:
        with closing(con.cursor()) as cur:
            if values:
                cur.execute(sql, values)
            else:
                cur.execute(sql)

            if sql.strip().upper().startswith("SELECT"):
                return cur.fetchall()
            else:
                con.commit()


def chrome_driver(headless):
    chrome_options = webdriver.ChromeOptions()
    if headless:
        chrome_options.add_argument('--headless=new')
    driver = webdriver.Chrome(options=chrome_options)
    return driver


def load_webpage(url):
    driver = chrome_driver(headless=False)
    driver.get(url)
    return driver


def create_database():
    pass


def main():
    print("Updating Database...")


if __name__ == '__main__':
    main()
