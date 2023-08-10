const speakers = [
    {
        name: "Benjamin Zulu",
        image: "images/zulu.jpg",
        image1: "images/images/istockphoto.jpg",
        profession: "Psychologist and Conference Speaker",
        description: "Benjamin Zulu is a renowned life coach and psychologist based in Nairobi, Kenya. He holds a Master's degree in Counseling Psychology and a Bachelor of Law from the University of Nairobi."
    },
    {
        name: " Prof. Micheni Ntiba",
        image: "images/images/micheni.jpg",
        image1: "images/imagesistockphoto.jpg",
        profession: "Minister of Fisheries",
        description: "Principal Secretary at the Department of Fisheries, Aquaculture and The Blue Economy for the Ministry of Agriculture, Livestock, Fisheries and Irrigation in Kenya."
    },
    {
        name: "Dr. Joseph Shevel",
        image: "images/shevel.jpg",
        image1: "iimages/images/istockphoto.jpg",
        profession: " President of the Galilee International Management Institute",
        description: "Dr Joseph is active in Middle East peace activities and in the planning of development strategies for emerging regions  and a member of many networks, in the Middle East, seeking a solution for the Palestinian-Israeli conflict",
    },
    {
        name: "Robert Buyale",
        image: "images/buyale.jpg",
        image1: "images/images/istockphoto.jpg",
        profession: "Psychologist and Conference Speaker",
        description: "Benjamin Zulu is a renowned life coach and psychologist based in Nairobi, Kenya. He holds a Master's degree in Counseling Psychology and a Bachelor of Law from the University of Nairobi."
    },
    {
        name: "Professor Patrick Lumumba",
        images: "images/Lumumba.jpg",
        image1: "images/images/istockphoto.jpg",
        profession: "Director of the Kenya Anti-Corruption Commission",
        description: "Patrick Loch Otieno Lumumba is a Kenyan who served as the Director of the Kenya Anti-Corruption Commission from September 2010 to August 2011."
    }
];
const featuredSpeakers = document.getElementById('speakers');
for(let i = 0; i < speakers.length; i += 1) {
    const speaker1 = `<li class="speaker1"><div class="stock1"><img src="${speakers[i].image1}" alt=""></div><div class="zulu"><img src="images/images/zulu.jpg" alt=""></div> <h4 class="zulu1">Benjamin Zulu</h4> <div class="zulu-heading">Psychologist and Conference Speaker</div><p class="zulu-par">Benjamin Zulu is a renowned life coach and psychologist based in Nairobi, Kenya.</p></li>`;
    const speaker2 = `<li class="speaker2"><div class="stock1"><img src="${speakers[i].image1}" alt=""></div><div class="micheni"><img src="images/images/charity ngilu.png" alt=""></div> <h4 class="micheni1">Charity Ngilu</h4> <div class="zulu-heading">Second governor elected for Kitui County</div><p class="zulu-par">Charity Ngilu served as Minister for Health from 2003 until 2007 and Minister of Water and Irrigation from April 2008 to 2013.</p></li>`;
    const speaker3 = `<li class="speaker3 speakerA"><div class="stock1"><img src="${speakers[i].image1}" alt=""></div><div class="shevel"><img src="images/images/shevel.jpg" alt=""></div> <h4 class="shevel1">Dr. Joseph Shevel</h4> <div class="zulu-heading">President of the Galilee International Management Institute</div><p class="zulu-par">Dr Joseph is active in Middle East peace activities and in the planning of development strategies for emerging regions  and a member of many networks, in the Middle East, seeking a solution for the Palestinian-Israeli conflict</p></li>`;
    const speaker4 = `<li class="speaker4 speakerB"><div class="stock1"><img src="${speakers[i].image1}" alt=""></div><div class="buyale"><img src="images/images/buyale.jpg" alt=""></div> <h4 class="buyale1">Robert Buyale</h4> <div class="zulu-heading">Interpreneur and Motivational Speaker</div><p class="zulu-par">Benjamin Zulu is a renowned life coach and psychologist based in Nairobi, Kenya.</p></li>`; 
    const speaker5 =`<li class="speaker5 speakerC"><div class="stock1"><img src="${speakers[i].image1}" alt=""></div><div class="lumumba"><img src="images/images/Lumumba.jpg" alt=""></div> <h4 class="lumumba1">Professor Patrick Lumumba</h4> <div class="zulu-heading">Director of the Kenya Anti-Corruption Commission</div><p class="zulu-par">Patrick Loch Otieno Lumumba is a Kenyan who served as the Director of the Kenya Anti-Corruption Commission from September 2010 to August 2011.</p></li>`;
    const speaker6 = `<li class="speaker6 speakerD"><div class="stock1"><img src="${speakers[i].image1}" alt=""></div><div class="karugu"><img src="images/images/caroline karugu.jpg" alt=""></div> <h4 class="karugu1">Dr.Caroline W. Karugu.</h4> <div class="zulu-heading">Nyeri Deputy Governor Dr. Caroline Karugu </div><p class="zulu-par">An Investments & Finance expert who has had the opportunity to study various disciplines, in various schools and work in various professions in various companies in both the private and public sectors</p></li>`;
    featuredSpeakers.innerHTML = speaker1 + speaker2 + speaker3 + speaker4 + speaker5 + speaker6;
};
document.addEventListener('DOMContentLoaded', () => {
     document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.links').classList.add('links-active');
        document.querySelector('.links').classList.remove('links-inactive');
    });
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.links').classList.remove('links-active');
        document.querySelector('.links').classList.add('links-inactive');
    });
    document.querySelector('.nav-link1').addEventListener('click', () => {
        document.querySelector('.navbar-links').classList.remove('navbar-links-active');
        document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
    });
    document.querySelector('.nav-link2').addEventListener('click', () => {
        document.querySelector('.navbar-links').classList.remove('navbar-links-active');
        document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
    });
    document.querySelector('.nav-link3').addEventListener('click', () => {
        document.querySelector('.navbar-links').classList.remove('navbar-links-active');
        document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
    });
});
const seeMoreButton = document.querySelector('.see-more');
const seeLessButton = document.querySelector('.see-less');
const activeSpeaker = document.querySelector('.speakerA');

seeMoreButton.addEventListener('click', () => { 
    activeSpeaker.style.display = 'block';
    seeLessButton.style.display = 'flex';
    seeMoreButton.style.display = 'none';
});
const activeSpeake = document.querySelector('.speakerB');
seeMoreButton.addEventListener('click', () => { 
    activeSpeake.style.display = 'block';
    seeLessButton.style.display = 'flex';
    seeMoreButton.style.display = 'none';
});
const activeSpeak = document.querySelector('.speakerC');
seeMoreButton.addEventListener('click', () => { 
    activeSpeak.style.display = 'block';
    seeLessButton.style.display = 'flex';
    seeMoreButton.style.display = 'none';
});
const activeSpea = document.querySelector('.speakerD');
seeMoreButton.addEventListener('click', () => { 
    activeSpea.style.display = 'block';
    seeLessButton.style.display = 'flex';
    seeMoreButton.style.display = 'none';
});
seeLessButton.addEventListener('click', () => {
    activeSpeaker.style.display = 'none';
    seeMoreButton.style.display = 'flex';
    seeLessButton.style.display = 'none';
    seeMoreButton.style.padding = '5%';
});
seeLessButton.addEventListener('click', () => {
    activeSpeaker.style.display = 'none';
    seeLessButton.style.display = 'none';
});
seeLessButton.addEventListener('click', () => {
    activeSpeake.style.display = 'none';
});
seeLessButton.addEventListener('click', () => {
    activeSpeak.style.display = 'none';
});
seeLessButton.addEventListener('click', () => {
    activeSpea.style.display = 'none';
});