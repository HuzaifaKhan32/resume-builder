var _a, _b, _c, _d;
// Selecting HTML tags for inserting input values
var nameElement = document.querySelector(".good-name");
var designationElement = document.querySelector(".designation");
var aboutElement = document.querySelector(".about-para");
var addressElement = document.querySelector(".Address-container .content");
var phoneElement = document.querySelector(".phone-container .content");
var emailElement = document.querySelector(".email-container .content");
var websiteElement = document.querySelector(".website-container .content");
var educationElement = document.querySelector(".education p");
var experienceElement = document.querySelector(".Experience p");
var skillsElement = document.querySelector(".skills p");
// Selecting input tags for taking user inputs
var fullNameInput = document.querySelector(".fullname");
var designationInput = document.querySelector(".Designation");
var addressInput = document.querySelector(".Address");
var phoneInput = document.querySelector(".Phone-number");
var emailInput = document.querySelector(".email");
var websiteInput = document.querySelector(".website");
var aboutInput = document.querySelector(".about-me");
var educationInput = document.querySelector(".education");
var experienceInput = document.querySelector(".experience");
var skillsInput = document.querySelector(".skills");
// function for navigating to form for building dynamic resume
var handleDynamicClick = function (event) {
    event.preventDefault();
    window.location.href = "../form.html";
};
// function to navigate from any page to dynamic or static resume
var handleResumeClick = function (event) {
    event.preventDefault();
    window.location.href = "../index.html";
};
// function for submit handling
var handleSubmit = function (event) {
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem("name", fullNameInput.value);
    localStorage.setItem("designation", designationInput.value);
    localStorage.setItem("about", aboutInput.value);
    localStorage.setItem("address", addressInput.value);
    localStorage.setItem("phone", phoneInput.value);
    localStorage.setItem("website", websiteInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("skills", skillsInput.value);
    localStorage.setItem("experience", experienceInput.value);
    localStorage.setItem("education", educationInput.value);
    // after storing all the values user will have go to the builded resume
    window.location.href = "../dynamic.html";
};
// function to fetch values from localstorage and insert into its corresponding categories
var loadDataOnPage = function () {
    if (nameElement && localStorage.getItem("name")) {
        nameElement.innerHTML = "<h1>".concat(localStorage.getItem("name"), "</h1>");
    }
    if (designationElement && localStorage.getItem("designation")) {
        designationElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("designation"), "</p>");
    }
    if (aboutElement && localStorage.getItem("about")) {
        aboutElement.innerHTML = "".concat(localStorage.getItem("about"));
    }
    if (addressElement && localStorage.getItem("address")) {
        addressElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("address"), "</p>");
    }
    if (phoneElement && localStorage.getItem("phone")) {
        phoneElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("phone"), "</p>");
    }
    if (emailElement && localStorage.getItem("email")) {
        emailElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("email"), "</p>");
    }
    if (websiteElement && localStorage.getItem("website")) {
        websiteElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("website"), "</p>");
    }
    if (educationElement && localStorage.getItem("education")) {
        educationElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("education"), "</p>");
    }
    if (experienceElement && localStorage.getItem("experience")) {
        experienceElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("experience"), "</p>");
    }
    if (skillsElement && localStorage.getItem("skills")) {
        skillsElement.innerHTML = "<p class=\"wrap\">".concat(localStorage.getItem("skills"), "</p>");
    }
};
var preFilled = function () {
    if (fullNameInput && localStorage.getItem("name"))
        fullNameInput.value = localStorage.getItem("name") || "";
    if (designationInput && localStorage.getItem("designation"))
        designationInput.value = localStorage.getItem("designation") || "";
    if (aboutInput && localStorage.getItem("about"))
        aboutInput.value = localStorage.getItem("about") || "";
    if (addressInput && localStorage.getItem("address"))
        addressInput.value = localStorage.getItem("address") || "";
    if (phoneInput && localStorage.getItem("phone"))
        phoneInput.value = localStorage.getItem("phone") || "";
    if (websiteInput && localStorage.getItem("website"))
        websiteInput.value = localStorage.getItem("website") || "";
    if (emailInput && localStorage.getItem("email"))
        emailInput.value = localStorage.getItem("email") || "";
    if (experienceInput && localStorage.getItem("experience"))
        experienceInput.value = localStorage.getItem("experience") || "";
    if (educationInput && localStorage.getItem("education"))
        educationInput.value = localStorage.getItem("education") || "";
    if (skillsInput && localStorage.getItem("skills"))
        skillsInput.value = localStorage.getItem("skills") || "";
};
var handleEdit = function (event) {
    event.preventDefault();
    window.location.href = "../form.html";
};
document.addEventListener("DOMContentLoaded", preFilled);
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleSubmit); // form submission button
(_b = document.querySelector(".dynamic-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", handleDynamicClick); // form navigation
(_c = document.querySelector(".Resume-button")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", handleResumeClick); // resume navigation
(_d = document.querySelector(".editable")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", handleEdit);
if (window.location.pathname == "/dynamic.html") {
    loadDataOnPage();
}
