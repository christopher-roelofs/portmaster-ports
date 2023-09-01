
porter_mapping = {
    "bamboozler": ["Bamboozler"],
    "brooksytech": ["brooksytech"],
    "cebion and romadu": ["Cebion", "romadu"],
    "cebion": ["Cebion"],
    "christian_haitian": ["Christian_Haitian"],
    "jetup and romadu": ["Jetup", "romadu"],
    "jetup": ["Jetup"],
    "johnny on flame": ["Johnny on Flame"],
    "johnny on flame, overflask, and nuxx": ["Johnny on Flame", "Overflask", "Nuxx"],
    "johnnyonflame": ["Johnny on Flame"],
    "jtothebell": ["jtothebell"],
    "kloptops and cebion": ["kloptops", "Cebion"],
    "kloptops and snoopy": ["kloptops", "Snoopy"],
    "kloptops": ["kloptops"],
    "krishenriksen (kreal)": ["krishenriksen"],
    "nl255": ["nl255"],
    "orson": ["Orson"],
    "romadu": ["romadu"],
    "slayer366": ["Slayer366"],
    "tekkenfede": ["Tekkenfede"],
    "thegammasqueeze": ["TheGammaSqueeze"],
}

function mapPorters(string) {
    return porter_mapping[string.toLowerCase()];
}