n = total number of ingredients
unsafe = #Get from db
ineffective = #Get from db
average = #Get from db
good = #get from db
untested = #Get from db
gf = #Get from db
env = #Get from db
vegan = #Get from bd


score = 100-((unsafe * 10) + (ineffective * 2))
# Where >= 4 unsafe ingredients results in a failing score
# Score should not include user preferences, as it is meant to be objective and about safety
    # Other boolean values (gf, vegan) will be included in report
perc_u = (unsafe/n)*100
perc_i = (ineffective/n)*100
perc_a = (average/n)*100
perc_g = (good/n)*100
