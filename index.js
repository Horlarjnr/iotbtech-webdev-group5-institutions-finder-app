 (function() { 
      // BUILT‑IN LIST 
      const BUILT_IN_INSTITUTIONS = [ 
        { name: "Abia State Polytechnic", state: "Abia", type: "Polytechnic", web: 
"https://abiastatepolytechnic.edu.ng" }, 
        { name: "Abia State University", state: "Abia", type: "State University", web: 
"https://abiastateuniversity.edu.ng" }, 
        { name: "Achievers University", state: "Ondo", type: "Private University", web: 
"https://achievers.edu.ng" }, 
        { name: "Adamawa State College of Education", state: "Adamawa", type: "College of Education", web: "https://asceta.edu.ng" }, 
        { name: "Adamawa State Polytechnic", state: "Adamawa", type: "Polytechnic", web: 
"https://adamawastatepoly.edu.ng" }, 
        { name: "Adamawa State University", state: "Adamawa", type: "State University", web: 
"https://adsu.edu.ng" }, 
        { name: "Adeleke University", state: "Osun", type: "Private University", web: 
"https://adelekeuniversity.edu.ng" }, 
        { name: "Adeniran Ogunsanya College of Education", state: "Lagos", type: "College of Education", web: "https://aocoed.edu.ng" }, 
        { name: "Adeyemi College of Education", state: "Ondo", type: "College of Education", web: 
"https://aceondo.edu.ng" }, 
        { name: "Afe Babalola University", state: "Ekiti", type: "Private University", web: 
"https://abuad.edu.ng" }, 
        { name: "Ahmadu Bello University", state: "Kaduna", type: "Federal University", web: 
"https://abu.edu.ng" }, 
        { name: "Ajayi Crowther University", state: "Oyo", type: "Private University", web: 
"https://acu.edu.ng" }, 
        { name: "Akwa Ibom State College of Education", state: "Akwa Ibom", type: "College of Education", web: "https://akscoed.edu.ng" }, 
        { name: "Akwa Ibom State Polytechnic", state: "Akwa Ibom", type: "Polytechnic", web: 
"https://akwaibompoly.edu.ng" }, 
        { name: "Akwa Ibom State University", state: "Akwa Ibom", type: "State University", web: 
"https://aksu.edu.ng" }, 
        { name: "Al-Hikmah University", state: "Kwara", type: "Private University", web: 
"https://alhikmah.edu.ng" }, 
        { name: "Alvan Ikoku Federal College of Education", state: "Imo", type: "College of Education", web: "https://alvanikoku.edu.ng" }, 
        { name: "American University of Nigeria", state: "Adamawa", type: "Private University", 
web: "https://aun.edu.ng" }, 
        { name: "Anambra State Polytechnic", state: "Anambra", type: "Polytechnic", web: 
"https://anspoly.edu.ng" }, 
        { name: "Anambra State University (now Chukwuemeka Odumegwu Ojukwu University)", 
state: "Anambra", type: "State University", web: "https://coou.edu.ng" }, 
        { name: "Auchi Polytechnic", state: "Edo", type: "Polytechnic", web: 
"https://auchipoly.edu.ng" }, 
        { name: "Babcock University", state: "Ogun", type: "Private University", web: 
"https://babcock.edu.ng" }, 
        { name: "Bauchi State University", state: "Bauchi", type: "State University", web: 
"https://basug.edu.ng" }, 
        { name: "Bayero University Kano", state: "Kano", type: "Federal University", web: 
"https://buk.edu.ng" }, 
        { name: "Baze University", state: "FCT", type: "Private University", web: 
"https://bazeuniversity.edu.ng" }, 
        { name: "Bells University of Technology", state: "Ogun", type: "Private University", web: 
"https://bellsuniversity.edu.ng" }, 
        { name: "Benue State Polytechnic", state: "Benue", type: "Polytechnic", web: 
"https://benpoly.edu.ng" }, 
        { name: "Benue State University", state: "Benue", type: "State University", web: 
"https://bsum.edu.ng" }, 
        { name: "Bingham University", state: "Nasarawa", type: "Private University", web: 
"https://binghamuni.edu.ng" }, 
        { name: "Borno State University", state: "Borno", type: "State University", web: 
"https://bosu.edu.ng" }, 
        { name: "Bowen University", state: "Osun", type: "Private University", web: 
"https://bowen.edu.ng" }, 
        { name: "Caleb University", state: "Lagos", type: "Private University", web: 
"https://calebuniversity.edu.ng" }, 
        { name: "Chrisland University", state: "Ogun", type: "Private University", web: 
"https://chrislanduniversity.edu.ng" }, 
        { name: "Christopher University", state: "Ogun", type: "Private University", web: 
"https://christopheruniversity.edu.ng" }, 
        { name: "Clifford University", state: "Abia", type: "Private University", web: 
"https://clifforduni.edu.ng" }, 
        { name: "Coal City University", state: "Enugu", type: "Private University", web: 
"https://ccu.edu.ng" }, 
        { name: "College of Education, Akwanga", state: "Nasarawa", type: "College of Education", 
web: "https://coea.edu.ng" }, 
        { name: "College of Education, Gindiri", state: "Plateau", type: "College of Education", web: 
"https://coegindiri.edu.ng" }, 
        { name: "College of Education, Hong", state: "Adamawa", type: "College of Education", 
web: "https://coehong.edu.ng" }, 
        { name: "College of Education, Ikere-Ekiti", state: "Ekiti", type: "College of Education", web: 
"https://coeikere.edu.ng" }, 
        { name: "College of Education, Katsina-Ala", state: "Benue", type: "College of Education", 
web: "https://coekatsinaala.edu.ng" }, 
        { name: "College of Education, Oro", state: "Kwara", type: "College of Education", web: 
"https://coeoron.edu.ng" }, 
        { name: "College of Education, Warri", state: "Delta", type: "College of Education", web: 
"https://coewarri.edu.ng" }, 
        { name: "Covenant University", state: "Ogun", type: "Private University", web: 
"https://covenantuniversity.edu.ng" }, 
        { name: "Crawford University", state: "Ogun", type: "Private University", web: 
"https://crawforduniversity.edu.ng" }, 
        { name: "Crescent University", state: "Ogun", type: "Private University", web: 
"https://crescent-university.edu.ng" }, 
        { name: "Cross River State College of Education", state: "Cross River", type: "College of Education", web: "https://crossrivercoed.edu.ng" }, 
        { name: "Cross River State University of Technology", state: "Cross River", type: "State University", web: "https://crutech.edu.ng" }, 
        { name: "Crown Polytechnic", state: "Oyo", type: "Polytechnic", web: 
"https://crownpolytechnic.edu.ng" }, 
        { name: "Delta State College of Education, Mosogar", state: "Delta", type: "College of Education", web: "https://delsu.edu.ng" }, 
        { name: "Delta State Polytechnic", state: "Delta", type: "Polytechnic", web: 
"https://dspg.edu.ng" }, 
        { name: "Delta State University", state: "Delta", type: "State University", web: 
"https://delsu.edu.ng" }, 
        { name: "Dominican University", state: "Oyo", type: "Private University", web: 
"https://dominicanuniversity.edu.ng" }, 
        { name: "Ebonyi State College of Education", state: "Ebonyi", type: "College of Education", 
web: "https://ebscoed.edu.ng" }, 
        { name: "Ebonyi State University", state: "Ebonyi", type: "State University", web: 
"https://ebsu.edu.ng" }, 
        { name: "Edwin Clark University", state: "Delta", type: "Private University", web: 
"https://edwinclarkuniversity.edu.ng" }, 
        { name: "Ekiti State College of Education", state: "Ekiti", type: "College of Education", web: 
"https://ekscoed.edu.ng" }, 
        { name: "Ekiti State University", state: "Ekiti", type: "State University", web: 
"https://eksu.edu.ng" }, 
        { name: "Elizade University", state: "Ondo", type: "Private University", web: 
"https://elizadeuniversity.edu.ng" }, 
        { name: "Enugu State College of Education (Technical)", state: "Enugu", type: "College of Education", web: "https://enugucoe.edu.ng" }, 
        { name: "Enugu State University of Science and Technology", state: "Enugu", type: "State University", web: "https://esut.edu.ng" }, 
        { name: "FCT College of Education, Zuba", state: "FCT", type: "College of Education", web: 
"https://fctcoezuba.edu.ng" }, 
        { name: "Federal College of Education (Technical), Akoka", state: "Lagos", type: "College of Education", web: "https://fcetakoka.edu.ng" }, 
        { name: "Federal College of Education (Technical), Omoku", state: "Rivers", type: "College of Education", web: "https://fcetomoku.edu.ng" }, 
        { name: "Federal College of Education (Technical), Potiskum", state: "Yobe", type: "College of Education", web: "https://fcetpotiskum.edu.ng" }, 
        { name: "Federal College of Education, Abeokuta", state: "Ogun", type: "College of Education", web: "https://fceabeokuta.edu.ng" }, 
        { name: "Federal College of Education, Eha-Amufu", state: "Enugu", type: "College of Education", web: "https://fceehamufu.edu.ng" }, 
        { name: "Federal College of Education, Kano", state: "Kano", type: "College of Education", 
web: "https://fcekano.edu.ng" }, 
        { name: "Federal College of Education, Kontagora", state: "Niger", type: "College of Education", web: "https://fcekontagora.edu.ng" }, 
        { name: "Federal College of Education, Obudu", state: "Cross River", type: "College of Education", web: "https://fceobudu.edu.ng" }, 
        { name: "Federal College of Education, Okene", state: "Kogi", type: "College of Education", 
web: "https://fceokene.edu.ng" }, 
        { name: "Federal College of Education, Pankshin", state: "Plateau", type: "College of Education", web: "https://fcepankshin.edu.ng" }, 
        { name: "Federal College of Education, Yola", state: "Adamawa", type: "College of Education", web: "https://fceyola.edu.ng" }, 
        { name: "Federal College of Education, Zaria", state: "Kaduna", type: "College of Education", web: "https://fcezaria.edu.ng" }, 
        { name: "Federal Polytechnic, Ado-Ekiti", state: "Ekiti", type: "Polytechnic", web: 
"https://fedpolyado.edu.ng" }, 
        { name: "Federal Polytechnic, Bauchi", state: "Bauchi", type: "Polytechnic", web: 
"https://fptb.edu.ng" }, 
        { name: "Federal Polytechnic, Bida", state: "Niger", type: "Polytechnic", web: 
"https://fedpolybida.edu.ng" }, 
        { name: "Federal Polytechnic, Damaturu", state: "Yobe", type: "Polytechnic", web: 
"https://fedpodamaturu.edu.ng" }, 
        { name: "Federal Polytechnic, Ede", state: "Osun", type: "Polytechnic", web: 
"https://federalpolyede.edu.ng" }, 
        { name: "Federal Polytechnic, Idah", state: "Kogi", type: "Polytechnic", web: 
"https://federalpolyidah.edu.ng" }, 
        { name: "Federal Polytechnic, Ilaro", state: "Ogun", type: "Polytechnic", web: 
"https://federalpolyilaro.edu.ng" }, 
        { name: "Federal Polytechnic, Kaura Namoda", state: "Zamfara", type: "Polytechnic", web: 
"https://fedpolykaura.edu.ng" }, 
        { name: "Federal Polytechnic, Mubi", state: "Adamawa", type: "Polytechnic", web: 
"https://fedpolymubi.edu.ng" }, 
        { name: "Federal Polytechnic, Nekede", state: "Imo", type: "Polytechnic", web: 
"https://fpno.edu.ng" }, 
        { name: "Federal Polytechnic, Oko", state: "Anambra", type: "Polytechnic", web: 
"https://federalpolyoko.edu.ng" }, 
        { name: "Federal Polytechnic, Offa", state: "Kwara", type: "Polytechnic", web: 
"https://fpoffa.edu.ng" }, 
        { name: "Federal University Gashua", state: "Yobe", type: "Federal University", web: 
"https://fugashua.edu.ng" }, 
        { name: "Federal University Gusau", state: "Zamfara", type: "Federal University", web: 
"https://fugusau.edu.ng" }, 
        { name: "Federal University Kashere", state: "Gombe", type: "Federal University", web: 
"https://fukashere.edu.ng" }, 
        { name: "Federal University Lafia", state: "Nasarawa", type: "Federal University", web: 
"https://fulafia.edu.ng" }, 
        { name: "Federal University Lokoja", state: "Kogi", type: "Federal University", web: 
"https://fulokoja.edu.ng" }, 
        { name: "Federal University Ndifu-Alike", state: "Ebonyi", type: "Federal University", web: 
"https://funai.edu.ng" }, 
        { name: "Federal University of Petroleum Resources Effurun", state: "Delta", type: "Federal University", web: "https://fupre.edu.ng" }, 
        { name: "Federal University of Technology Akure", state: "Ondo", type: "Federal University", 
web: "https://futa.edu.ng" }, 
        { name: "Federal University of Technology Minna", state: "Niger", type: "Federal University", 
web: "https://futminna.edu.ng" }, 
        { name: "Federal University of Technology Owerri", state: "Imo", type: "Federal University", 
web: "https://futo.edu.ng" }, 
        { name: "Federal University Otuoke", state: "Bayelsa", type: "Federal University", web: 
"https://fuotuoke.edu.ng" }, 
        { name: "Federal University Oye-Ekiti", state: "Ekiti", type: "Federal University", web: 
"https://fuoye.edu.ng" }, 
        { name: "Federal University Wukari", state: "Taraba", type: "Federal University", web: 
"https://fuwukari.edu.ng" }, 
        { name: "Fountain University", state: "Osun", type: "Private University", web: 
"https://fountainuniversity.edu.ng" }, 
        { name: "Godfrey Okoye University", state: "Enugu", type: "Private University", web: 
"https://gouni.edu.ng" }, 
        { name: "Gombe State College of Education", state: "Gombe", type: "College of Education", 
web: "https://gomscoe.edu.ng" }, 
        { name: "Gombe State University", state: "Gombe", type: "State University", web: 
"https://gsu.edu.ng" }, 
        { name: "Gregory University", state: "Abia", type: "Private University", web: 
"https://gregoryuniversity.edu.ng" }, 
        { name: "Hallmark University", state: "Ogun", type: "Private University", web: 
"https://hallmarkuniversity.edu.ng" }, 
        { name: "Hezekiah University", state: "Imo", type: "Private University", web: 
"https://hezekiahuniversity.edu.ng" }, 
        { name: "Ibrahim Badamasi Babangida University", state: "Niger", type: "State University", 
web: "https://ibbu.edu.ng" }, 
        { name: "Igbinedion University", state: "Edo", type: "Private University", web: 
"https://igbinedionuniversity.edu.ng" }, 
        { name: "Imo State Polytechnic", state: "Imo", type: "Polytechnic", web: 
"https://imopoly.edu.ng" }, 
        { name: "Imo State University", state: "Imo", type: "State University", web: 
"https://imsu.edu.ng" }, 
        { name: "Joseph Ayo Babalola University", state: "Osun", type: "Private University", web: 
"https://jabu.edu.ng" }, 
        { name: "Kaduna Polytechnic", state: "Kaduna", type: "Polytechnic", web: 
"https://kadunapolytechnic.edu.ng" }, 
        { name: "Kaduna State College of Education", state: "Kaduna", type: "College of Education", web: "https://kscoed.edu.ng" }, 
        { name: "Kaduna State University", state: "Kaduna", type: "State University", web: 
"https://kasu.edu.ng" }, 
        { name: "Kano State College of Education", state: "Kano", type: "College of Education", 
web: "https://kanostatecoed.edu.ng" }, 
        { name: "Kano State Polytechnic", state: "Kano", type: "Polytechnic", web: 
"https://kanopoly.edu.ng" }, 
        { name: "Kano University of Science and Technology", state: "Kano", type: "State University", web: "https://kust.edu.ng" }, 
        { name: "Kebbi State College of Education", state: "Kebbi", type: "College of Education", 
web: "https://kebbicoe.edu.ng" }, 
        { name: "Kebbi State University of Science and Technology", state: "Kebbi", type: "State University", web: "https://ksusta.edu.ng" }, 
        { name: "Kings University", state: "Osun", type: "Private University", web: 
"https://kingsuniversity.edu.ng" }, 
        { name: "Kogi State College of Education", state: "Kogi", type: "College of Education", web: 
"https://kogicoe.edu.ng" }, 
        { name: "Kogi State Polytechnic", state: "Kogi", type: "Polytechnic", web: 
"https://kogistatepolytechnic.edu.ng" }, 
        { name: "Kogi State University", state: "Kogi", type: "State University", web: 
"https://ksu.edu.ng" }, 
        { name: "Kwara State College of Education", state: "Kwara", type: "College of Education", 
web: "https://kwaracoe.edu.ng" }, 
        { name: "Kwara State Polytechnic", state: "Kwara", type: "Polytechnic", web: 
"https://kwarastatepolytechnic.edu.ng" }, 
        { name: "Kwara State University", state: "Kwara", type: "State University", web: 
"https://kwasu.edu.ng" }, 
        { name: "Ladoke Akintola University of Technology", state: "Oyo", type: "State University", 
web: "https://lautech.edu.ng" }, 
        { name: "Lagos State College of Education", state: "Lagos", type: "College of Education", 
web: "https://lascoed.edu.ng" }, 
        { name: "Lagos State Polytechnic", state: "Lagos", type: "Polytechnic", web: 
"https://laspotech.edu.ng" }, 
        { name: "Lagos State University", state: "Lagos", type: "State University", web: 
"https://lasu.edu.ng" }, 
        { name: "Landmark University", state: "Kwara", type: "Private University", web: 
"https://lmu.edu.ng" }, 
        { name: "Lead City University", state: "Oyo", type: "Private University", web: 
"https://lcu.edu.ng" }, 
        { name: "Madonna University", state: "Anambra", type: "Private University", web: 
"https://madonnauniversity.edu.ng" }, 
        { name: "McPherson University", state: "Ogun", type: "Private University", web: 
"https://mcphersonuniversity.edu.ng" }, 
        { name: "Michael Okpara University of Agriculture", state: "Abia", type: "Federal University", 
web: "https://mouau.edu.ng" }, 
        { name: "Modibbo Adama University of Technology", state: "Adamawa", type: "Federal University", web: "https://mautech.edu.ng" }, 
        { name: "Mountain Top University", state: "Ogun", type: "Private University", web: 
"https://mtu.edu.ng" }, 
        { name: "Nasarawa State College of Education", state: "Nasarawa", type: "College of Education", web: "https://nassarawacoe.edu.ng" }, 
        { name: "Nasarawa State Polytechnic", state: "Nasarawa", type: "Polytechnic", web: 
"https://nasarawastatepoly.edu.ng" }, 
        { name: "Nasarawa State University", state: "Nasarawa", type: "State University", web: 
"https://nsuk.edu.ng" }, 
        { name: "National Open University of Nigeria", state: "Lagos", type: "Federal University", 
web: "https://nou.edu.ng" }, 
        { name: "Niger Delta University", state: "Bayelsa", type: "State University", web: 
"https://ndu.edu.ng" }, 
        { name: "Niger State College of Education", state: "Niger", type: "College of Education", 
web: "https://nscpg.edu.ng" }, 
        { name: "Niger State Polytechnic", state: "Niger", type: "Polytechnic", web: 
"https://nigerstatepoly.edu.ng" }, 
        { name: "Nile University of Nigeria", state: "FCT", type: "Private University", web: 
"https://nileuniversity.edu.ng" }, 
        { name: "Nnamdi Azikiwe University", state: "Anambra", type: "Federal University", web: 
"https://unizik.edu.ng" }, 
        { name: "Novena University", state: "Delta", type: "Private University", web: 
"https://novenauniversity.edu.ng" }, 
        { name: "Obafemi Awolowo University", state: "Osun", type: "Federal University", web: 
"https://oauife.edu.ng" }, 
        { name: "Obong University", state: "Akwa Ibom", type: "Private University", web: 
"https://obonguniversity.edu.ng" }, 
        { name: "Oduduwa University", state: "Osun", type: "Private University", web: 
"https://oduduwauniversity.edu.ng" }, 
        { name: "Olabisi Onabanjo University", state: "Ogun", type: "State University", web: 
"https://oouagoiwoye.edu.ng" }, 
        { name: "Ondo State College of Education", state: "Ondo", type: "College of Education", 
web: "https://oscoed.edu.ng" }, 
        { name: "Ondo State University of Science and Technology", state: "Ondo", type: "State University", web: "https://osustech.edu.ng" }, 
        { name: "Osun State College of Education", state: "Osun", type: "College of Education", 
web: "https://osuncoed.edu.ng" }, 
        { name: "Osun State Polytechnic", state: "Osun", type: "Polytechnic", web: 
"https://ospoly.edu.ng" }, 
        { name: "Osun State University", state: "Osun", type: "State University", web: 
"https://uniosun.edu.ng" }, 
        { name: "Pan-Atlantic University", state: "Lagos", type: "Private University", web: 
"https://pau.edu.ng" }, 
        { name: "Plateau State College of Education", state: "Plateau", type: "College of Education", web: "https://plascoed.edu.ng" }, 
        { name: "Plateau State Polytechnic", state: "Plateau", type: "Polytechnic", web: 
"https://plateaustatepoly.edu.ng" }, 
        { name: "Plateau State University", state: "Plateau", type: "State University", web: 
"https://plasu.edu.ng" }, 
        { name: "Precious Cornerstone University", state: "Oyo", type: "Private University", web: 
"https://pcu.edu.ng" }, 
        { name: "Redeemer's University", state: "Osun", type: "Private University", web: 
"https://run.edu.ng" }, 
        { name: "Renaissance University", state: "Enugu", type: "Private University", web: 
"https://renaissanceuniversity.edu.ng" }, 
        { name: "Ritman University", state: "Akwa Ibom", type: "Private University", web: 
"https://ritmanuniversity.edu.ng" }, 
        { name: "Rivers State College of Education", state: "Rivers", type: "College of Education", 
web: "https://rscoed.edu.ng" }, 
        { name: "Rivers State Polytechnic", state: "Rivers", type: "Polytechnic", web: 
"https://riverspoly.edu.ng" }, 
        { name: "Rivers State University", state: "Rivers", type: "State University", web: 
"https://rsu.edu.ng" }, 
        { name: "Salem University", state: "Kogi", type: "Private University", web: 
"https://salemuniversity.edu.ng" }, 
        { name: "Samuel Adegboyega University", state: "Edo", type: "Private University", web: 
"https://sauni.edu.ng" }, 
        { name: "Sokoto State College of Education", state: "Sokoto", type: "College of Education", 
web: "https://sokotocoed.edu.ng" }, 
        { name: "Sokoto State University", state: "Sokoto", type: "State University", web: 
"https://ssu.edu.ng" }, 
        { name: "Southwestern University", state: "Ogun", type: "Private University", web: 
"https://southwesternuniversity.edu.ng" }, 
        { name: "Summit University", state: "Kwara", type: "Private University", web: 
"https://summituniversity.edu.ng" }, 
        { name: "Tai Solarin University of Education", state: "Ogun", type: "State University", web: 
"https://tasued.edu.ng" }, 
        { name: "Tansian University", state: "Anambra", type: "Private University", web: 
"https://tansianuniversity.edu.ng" }, 
        { name: "Taraba State College of Education", state: "Taraba", type: "College of Education", 
web: "https://tarabacoe.edu.ng" }, 
        { name: "Taraba State University", state: "Taraba", type: "State University", web: 
"https://tsuniversity.edu.ng" }, 
        { name: "The Polytechnic, Ibadan", state: "Oyo", type: "Polytechnic", web: 
"https://polyibadan.edu.ng" }, 
        { name: "Umaru Musa Yar'adua University", state: "Katsina", type: "State University", web: 
"https://umyu.edu.ng" }, 
        { name: "University of Abuja", state: "FCT", type: "Federal University", web: 
"https://uniabuja.edu.ng" }, 
        { name: "University of Benin", state: "Edo", type: "Federal University", web: 
"https://uniben.edu.ng" }, 
        { name: "University of Calabar", state: "Cross River", type: "Federal University", web: 
"https://unical.edu.ng" }, 
        { name: "University of Ibadan", state: "Oyo", type: "Federal University", web: 
"https://ui.edu.ng" }, 
        { name: "University of Ilorin", state: "Kwara", type: "Federal University", web: 
"https://unilorin.edu.ng" }, 
        { name: "University of Jos", state: "Plateau", type: "Federal University", web: 
"https://unijos.edu.ng" }, 
        { name: "University of Lagos", state: "Lagos", type: "Federal University", web: 
"https://unilag.edu.ng" }, 
        { name: "University of Maiduguri", state: "Borno", type: "Federal University", web: 
"https://unimaid.edu.ng" }, 
        { name: "University of Mkar", state: "Benue", type: "Private University", web: 
"https://unimkar.edu.ng" }, 
        { name: "University of Nigeria Nsukka", state: "Enugu", type: "Federal University", web: 
"https://unn.edu.ng" }, 
        { name: "University of Port Harcourt", state: "Rivers", type: "Federal University", web: 
"https://uniport.edu.ng" }, 
        { name: "University of Uyo", state: "Akwa Ibom", type: "Federal University", web: 
"https://uniuyo.edu.ng" }, 
        { name: "Usmanu Danfodiyo University", state: "Sokoto", type: "Federal University", web: 
"https://udusok.edu.ng" }, 
        { name: "Veritas University", state: "FCT", type: "Private University", web: 
"https://veritas.edu.ng" }, 
        { name: "Wellspring University", state: "Edo", type: "Private University", web: 
"https://wellspringuniversity.edu.ng" }, 
        { name: "Wesley University", state: "Ondo", type: "Private University", web: 
"https://wesleyuni.edu.ng" }, 
        { name: "Western Delta University", state: "Delta", type: "Private University", web: 
"https://wdu.edu.ng" }, 
        { name: "Yaba College of Technology", state: "Lagos", type: "Polytechnic", web: 
"https://yabatech.edu.ng" }, 
        { name: "Yobe State College of Education", state: "Yobe", type: "College of Education", 
web: "https://yobecoe.edu.ng" }, 
        { name: "Yobe State University", state: "Yobe", type: "State University", web: 
"https://ysu.edu.ng" }, 
        { name: "Zamfara State College of Education", state: "Zamfara", type: "College of Education", web: "https://zamcoed.edu.ng" } 
      ]; 
 
      // Ensure alphabetical order 
      BUILT_IN_INSTITUTIONS.sort((a, b) => a.name.localeCompare(b.name)); 
 
      // Normalize to match API structure (website is already a valid URL) 
      const FALLBACK_DATA = BUILT_IN_INSTITUTIONS.map(inst => ({ 
        name: inst.name, 
        country: "Nigeria", 
        alpha_two_code: "NG", 
        "state-province": inst.state, 
        domains: [new URL(inst.web).hostname], 
        web_pages: [inst.web], 
        type: inst.type 
      })); 
 
      // ---------- State ---------- 
      let allInstitutions = []; 
      let favourites = JSON.parse(localStorage.getItem('ngFavs') || '[]'); 
      let showFavOnly = false; 
 
      const searchInput = document.getElementById('searchInput'); 
      const favToggleBtn = document.getElementById('favToggleBtn'); 
      const grid = document.getElementById('institutionGrid'); 
      const status = document.getElementById('statusMessage'); 
 
      // Helpers 
      function getInstitutionKey(inst) { 
        const state = inst['state-province'] || ''; 
        const website = (inst.web_pages && inst.web_pages[0]) || ''; 
        return `${inst.name}__${state}__${website}`; 
      } 
      function isFavourite(inst) { 
        const key = getInstitutionKey(inst); 
        return favourites.some(fav => getInstitutionKey(fav) === key); 
      } 
      function saveFavourites() { localStorage.setItem('ngFavs', JSON.stringify(favourites)); } 
      function addToFavourites(inst) { if (!isFavourite(inst)) { favourites.push(inst); 
saveFavourites(); } } 
      function removeFromFavourites(inst) { favourites = favourites.filter(fav => 
getInstitutionKey(fav) !== getInstitutionKey(inst)); saveFavourites(); } 
 
      // Load data: try API, fallback to built‑in list 
      async function loadData() { 
        showLoading(); 
        try { 
          const response = await fetch('https://universities.hipolabs.com/search?country=Nigeria'); 
          if (!response.ok) throw new Error('API failed'); 
          const data = await response.json(); 
          allInstitutions = data.filter(inst => inst.country === 'Nigeria'); 
          console.log('  API loaded', allInstitutions.length, 'universities'); 
        } catch (err) { 
          console.warn('  API unreachable, using built‑in list'); 
          allInstitutions = [...FALLBACK_DATA]; 
        } 
        // Ensure uniqueness and sort 
        allInstitutions = allInstitutions.filter((inst, idx, self) => 
          idx === self.findIndex(i => getInstitutionKey(i) === getInstitutionKey(inst)) 
        ); 
        allInstitutions.sort((a, b) => a.name.localeCompare(b.name)); 
        applyFilter(); 
      } 
 
      // Filter & render 
      function applyFilter() { 
        let filtered = allInstitutions; 
        const term = searchInput.value.trim().toLowerCase(); 
        if (term) { 
          filtered = filtered.filter(inst => 
            inst.name.toLowerCase().includes(term) || 
            (inst['state-province'] || '').toLowerCase().includes(term) || 
            (inst.type && inst.type.toLowerCase().includes(term)) 
          ); 
        } 
        if (showFavOnly) filtered = filtered.filter(inst => isFavourite(inst)); 
        displayInstitutions(filtered); 
      } 
 
      function displayInstitutions(list) { 
        hideStatus(); 
        if (list.length === 0) { 
          status.classList.remove('hidden'); 
          if (showFavOnly && favourites.length === 0) status.innerHTML = '<p class="text-gray-500">No favourites saved yet.</p>'; 
          else if (showFavOnly) status.innerHTML = '<p class="text-gray-500">No favourites match the search.</p>'; 
          else if (searchInput.value.trim()) status.innerHTML = '<p class="text-gray-500">No institutions found.</p>'; 
          else status.innerHTML = '<p class="text-gray-500">No institutions to display.</p>'; 
          grid.innerHTML = ''; 
          return; 
        } 
        grid.innerHTML = list.map(inst => { 
          const fav = isFavourite(inst); 
          const typeBadge = inst.type ? `<span class="text-xs bg-gray-200 text-gray-600 px-2 
py-0.5 rounded-full">${inst.type}</span>` : ''; 
          const heartChar = fav ? '♥' : '♡'; 
          const heartColor = fav ? 'text-red-500' : 'text-gray-300'; 
          return ` 
            <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer 
overflow-hidden" 
                 data-key="${getInstitutionKey(inst)}" 
onclick="window._openDetail('${getInstitutionKey(inst)}')"> 
              <div class="bg-green-100 p-4 flex items-center justify-center"> 
                <span class="text-2xl font-bold text-green-700">${inst.name.charAt(0)}</span> 
              </div> 
              <div class="p-4"> 
                <h3 class="font-bold text-lg mb-1 truncate">${escapeHTML(inst.name)}</h3> 
                <p class="text-sm text-gray-500">${inst['state-province'] || 'Nigeria'}</p> 
                ${typeBadge} 
                <button class="heart-btn mt-3 text-2xl ${heartColor} hover:text-red-500 transition" 
                        data-key="${getInstitutionKey(inst)}">${heartChar}</button> 
              </div> 
            </div> 
          `; 
        }).join(''); 
      } 
 
      // Event delegation for hearts 
      grid.addEventListener('click', function(e) { 
        const heartBtn = e.target.closest('.heart-btn'); 
        if (!heartBtn) return; 
        e.stopPropagation(); 
        const key = heartBtn.getAttribute('data-key'); 
        let inst = allInstitutions.find(i => getInstitutionKey(i) === key); 
        if (!inst) inst = favourites.find(f => getInstitutionKey(f) === key); 
        if (!inst) return; 
        if (isFavourite(inst)) removeFromFavourites(inst); 
        else addToFavourites(inst); 
        applyFilter(); 
      }); 
 
      // Detail modal 
      function openDetail(key) { 
        let inst = allInstitutions.find(i => getInstitutionKey(i) === key); 
        if (!inst) inst = favourites.find(f => getInstitutionKey(f) === key); 
        if (!inst) return; 
        const fav = isFavourite(inst); 
        document.getElementById('modalTitle').textContent = inst.name; 
        document.getElementById('modalBody').innerHTML = ` 
          <p><strong>State:</strong> ${inst['state-province'] || 'Not specified'}</p> 
          <p><strong>Type:</strong> ${inst.type || 'N/A'}</p> 
          <p><strong>Website:</strong> <a href="${inst.web_pages[0]}" target="_blank" 
class="text-green-600 underline">${inst.web_pages[0]}</a></p> 
          <button id="modalFavBtn" class="mt-4 px-4 py-2 rounded-xl font-semibold ${fav ? 
'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}"> 
            ${fav ? '♥ Remove from Favourites' : '♡ Add to Favourites'} 
          </button> 
        `; 
        document.getElementById('modalFavBtn').addEventListener('click', function() { 
          if (isFavourite(inst)) removeFromFavourites(inst); 
          else addToFavourites(inst); 
          applyFilter(); 
          const btn = document.getElementById('modalFavBtn'); 
          const nowFav = isFavourite(inst); 
          btn.className = `mt-4 px-4 py-2 rounded-xl font-semibold ${nowFav ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`; 
          btn.textContent = nowFav ? '♥ Remove from Favourites' : '♡ Add to Favourites'; 
        }); 
        document.getElementById('detailModal').classList.remove('hidden'); 
      } 
      window._openDetail = openDetail; 
      function closeModal() { document.getElementById('detailModal').classList.add('hidden'); } 
 
      function showLoading() { 
        status.classList.remove('hidden'); 
        status.innerHTML = '<div class="loader mx-auto"></div><p class="mt-2 text-gray-500">Loading institutions...</p>'; 
        grid.innerHTML = ''; 
      } 
      function hideStatus() { status.classList.add('hidden'); } 
      function escapeHTML(str) { const div = document.createElement('div'); div.textContent = str; 
return div.innerHTML; } 
 
      favToggleBtn.addEventListener('click', () => { 
        showFavOnly = !showFavOnly; 
        favToggleBtn.textContent = showFavOnly ? '♡ All Institutions' : '♥ Favourites'; 
        applyFilter(); 
      }); 
      searchInput.addEventListener('input', applyFilter); 
      document.getElementById('detailModal').addEventListener('click', e => { if (e.target === 
document.getElementById('detailModal')) closeModal(); }); 
 
      loadData(); 
    })(); 