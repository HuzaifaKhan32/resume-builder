// Selecting HTML tags for inserting input values
const nameElement = document.querySelector(".good-name") as HTMLHeadingElement;
const designationElement = document.querySelector(".designation") as HTMLDivElement;
const aboutElement = document.querySelector(".about-para") as HTMLParagraphElement;
const addressElement = document.querySelector(".Address-container .content") as HTMLDivElement;
const phoneElement = document.querySelector(".phone-container .content") as HTMLDivElement;
const emailElement = document.querySelector(".email-container .content") as HTMLDivElement;
const websiteElement = document.querySelector(".website-container .content") as HTMLDivElement;

const educationElement = document.querySelector(".education p") as HTMLParagraphElement;
const experienceElement = document.querySelector(".Experience p") as HTMLParagraphElement;
const skillsElement = document.querySelector(".skills p") as HTMLParagraphElement;

// Selecting input tags for taking user inputs
const fullNameInput = document.querySelector(".fullname") as HTMLInputElement;
const designationInput = document.querySelector(".Designation") as HTMLInputElement;
const addressInput = document.querySelector(".Address") as HTMLInputElement;
const phoneInput = document.querySelector(".Phone-number") as HTMLInputElement;
const emailInput = document.querySelector(".email") as HTMLInputElement;
const websiteInput = document.querySelector(".website") as HTMLInputElement;
const aboutInput = document.querySelector(".about-me") as HTMLInputElement;

const educationInput = document.querySelector(".education") as HTMLInputElement;
const experienceInput = document.querySelector(".experience") as HTMLInputElement;
const skillsInput = document.querySelector(".skills") as HTMLInputElement;

// function for navigating to form for building dynamic resume
const handleDynamicClick = (event: Event) => {
    event.preventDefault();
    window.location.href = "../form.html";
};

// function to navigate from any page to dynamic or static resume
const handleResumeClick = (event: Event) => {
    event.preventDefault();
    window.location.href = "../index.html";
};

// function for submit handling
const handleSubmit = (event: Event) => {
    event.preventDefault();
    localStorage.clear()
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
const loadDataOnPage = () => {
    if (nameElement && localStorage.getItem("name")) {
        nameElement.innerHTML = `<h1>${localStorage.getItem("name")}</h1>`;
    }
    if (designationElement && localStorage.getItem("designation")) {
        designationElement.innerHTML = `<p class="wrap">${localStorage.getItem("designation")}</p>`;
    }
    if (aboutElement && localStorage.getItem("about")) {
        aboutElement.innerHTML = `${localStorage.getItem("about")}`;
    }
    if (addressElement && localStorage.getItem("address")) {
        addressElement.innerHTML = `<p class="wrap">${localStorage.getItem("address")}</p>`;
    }
    if (phoneElement && localStorage.getItem("phone")) {
        phoneElement.innerHTML = `<p class="wrap">${localStorage.getItem("phone")}</p>`;
    }
    if (emailElement && localStorage.getItem("email")) {
        emailElement.innerHTML = `<p class="wrap">${localStorage.getItem("email")}</p>`;
    }
    if (websiteElement && localStorage.getItem("website")) {
        websiteElement.innerHTML = `<p class="wrap">${localStorage.getItem("website")}</p>`;
    }
    if (educationElement && localStorage.getItem("education")) {
        educationElement.innerHTML = `<p class="wrap">${localStorage.getItem("education")}</p>`;
    }
    if (experienceElement && localStorage.getItem("experience")) {
        experienceElement.innerHTML = `<p class="wrap">${localStorage.getItem("experience")}</p>`;
    }
    if (skillsElement && localStorage.getItem("skills")) {
        skillsElement.innerHTML = `<p class="wrap">${localStorage.getItem("skills")}</p>`;
    }
};

const preFilled = () => {
    if(fullNameInput && localStorage.getItem("name")) fullNameInput.value = localStorage.getItem("name") || "";

    if(designationInput && localStorage.getItem("designation")) designationInput.value = localStorage.getItem("designation") || "";

    if(aboutInput && localStorage.getItem("about")) aboutInput.value = localStorage.getItem("about") || "";

    if(addressInput && localStorage.getItem("address")) addressInput.value = localStorage.getItem("address") || "";

    if(phoneInput && localStorage.getItem("phone")) phoneInput.value = localStorage.getItem("phone") || "";

    if(websiteInput && localStorage.getItem("website")) websiteInput.value = localStorage.getItem("website") || "";

    if(emailInput && localStorage.getItem("email")) emailInput.value = localStorage.getItem("email") || "";

    if(experienceInput && localStorage.getItem("experience")) experienceInput.value = localStorage.getItem
    ("experience") || "";

    if(educationInput && localStorage.getItem("education")) educationInput.value = localStorage.getItem("education") || "";

    if(skillsInput && localStorage.getItem("skills")) skillsInput.value = localStorage.getItem("skills") || "";
    
}

const handleEdit = (event : Event) => {
    event.preventDefault();
    window.location.href = "../form.html"
}

document.addEventListener("DOMContentLoaded", preFilled);
document.querySelector("form")?.addEventListener("submit", handleSubmit); // form submission button
document.querySelector(".dynamic-button")?.addEventListener("click", handleDynamicClick); // form navigation
document.querySelector(".Resume-button")?.addEventListener("click", handleResumeClick); // resume navigation
document.querySelector(".editable")?.addEventListener("click", handleEdit);

if (window.location.pathname == "/dynamic.html") {
    loadDataOnPage();
}

