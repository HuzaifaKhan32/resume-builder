var nameElement = document.querySelector(".good-name h1");
var designationElement = document.querySelector(".designation");
var aboutElement = document.querySelector(".about-para");
var addressElement = document.querySelector(".Address");
var phoneElement = document.querySelector(".phone-number");
var emailElement = document.querySelector(".email");
var websiteElement = document.querySelector(".website");
var educationElement = document.querySelector(".education p");
var experienceElement = document.querySelector(".Experience p");
var skillsElement = document.querySelector(".skills p");
if (nameElement) {
    nameElement.textContent = "Huzaifa Nadeem";
}
if (designationElement)
    designationElement.textContent = "Web Developer";
if (aboutElement) {
    aboutElement.textContent = "Passionate web developer with hands-on experience in creating responsive, user-focused applications. Currently enhancing my skills through the Governor's Initiative course to bring innovative solutions to real-world challenges.";
}
if (addressElement) {
    addressElement.textContent = "5/187 Liaquatabad, Karachi";
}
if (phoneElement) {
    phoneElement.textContent = "03197408731";
}
if (emailElement) {
    emailElement.textContent = "huzaifakhan0856551@gmail.com";
}
if (websiteElement) {
    websiteElement.textContent = "www.xyz.com";
}
if (educationElement) {
    educationElement.innerHTML = "Matriculation<br>Karachi Board, Pakistan<br>Completed: 2024<br><br>Intermediate \u2013 1st Year<br>Karachi Board, Pakistan<br>Present";
}
if (experienceElement) {
    experienceElement.textContent = "In my recent role, I supported project goals by coordinating tasks and collaborating with team members to enhance productivity. I gained hands-on experience in managing deadlines, communicating effectively, and solving challenges quickly to ensure smooth project flow.";
}
if (skillsElement) {
    skillsElement.textContent = "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind";
}
