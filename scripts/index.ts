const nameElement = document.querySelector(".good-name h1") as HTMLHeadingElement;
const designationElement = document.querySelector(".designation") as HTMLDivElement;
const aboutElement = document.querySelector(".about-para") as HTMLParagraphElement;
const addressElement = document.querySelector(".Address") as HTMLParagraphElement;
const phoneElement = document.querySelector(".phone-number") as HTMLParagraphElement;
const emailElement = document.querySelector(".email") as HTMLParagraphElement;
const websiteElement = document.querySelector(".website") as HTMLParagraphElement;


const educationElement = document.querySelector(".education p") as HTMLParagraphElement;
const experienceElement = document.querySelector(".Experience p") as HTMLParagraphElement;
const skillsElement = document.querySelector(".skills p") as HTMLParagraphElement;
 


const handleDynamicClick = (event : Event) => {
    event.preventDefault();
    window.location.href = "../form.html"
}

const handleResumeClick = (event : Event) => {
    event.preventDefault();
    window.location.href = "../index.html"
}




document.querySelector(".dynamic-button")?.addEventListener("click", handleDynamicClick);
document.querySelector(".Resume-button")?.addEventListener("click", handleResumeClick);


//For static resume
if (nameElement) {
    nameElement.textContent = "Huzaifa Nadeem";
}

if (designationElement) designationElement.textContent = "Web Developer";

if (aboutElement){
    aboutElement.textContent = "Passionate web developer with hands-on experience in creating responsive, user-focused applications. Currently enhancing my skills through the Governor's Initiative course to bring innovative solutions to real-world challenges.";
}

if (addressElement){
    addressElement.textContent = "5/187 Liaquatabad, Karachi";
}

if (phoneElement){
    phoneElement.textContent = "03197408731";
}

if (emailElement){
    emailElement.textContent = "huzaifakhan0856551@gmail.com";
}
if (websiteElement){
    websiteElement.textContent = "www.xyz.com";
}


if (educationElement) {
    educationElement.innerHTML = `Matriculation<br>Karachi Board, Pakistan<br>Completed: 2024<br><br>Intermediate – 1st Year<br>Karachi Board, Pakistan<br>Present`;
}

if (experienceElement) {
    experienceElement.textContent = "In my recent role, I supported project goals by coordinating tasks and collaborating with team members to enhance productivity. I gained hands-on experience in managing deadlines, communicating effectively, and solving challenges quickly to ensure smooth project flow.";
}

if (skillsElement){

    skillsElement.textContent = "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind";
}


