const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const h1Header = document.createElement("h1");
h1Header.textContent = "formcarry.";

const navLinks = document.createElement("div");
navLinks.className = "nav_links";

const links = ["FAQ", "Docs", "Integrations", "Pricing"];
links.forEach((text) => {
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = text;
  navLinks.appendChild(a);
});

const navButtons = document.createElement("div");
navButtons.className = "nav_buttons";

const loginButton = document.createElement("button");
loginButton.className = "login";
loginButton.textContent = "Login";

const signUpButton = document.createElement("button");
signUpButton.className = "sign";
signUpButton.textContent = "Sign up";

navButtons.appendChild(loginButton);
navButtons.appendChild(signUpButton);

header.appendChild(h1Header);
header.appendChild(navLinks);
header.appendChild(navButtons);

h1Header.style.fontSize = "32px";
h1Header.style.fontWeight = "400";
h1Header.style.lineHeight = "24px";

const navLinksArray = navLinks.querySelectorAll("a");
navLinksArray.forEach((link) => {
  link.style.fontSize = "14px";
  link.style.fontWeight = "400";
  link.style.lineHeight = "24px";
  link.style.textDecoration = "none";
  link.style.margin = "0 18px";
});

loginButton.style.border = "none";
loginButton.style.backgroundColor = "transparent";
loginButton.style.fontSize = "13px";
loginButton.style.fontWeight = "400";
loginButton.style.padding = "8px 18px";
loginButton.style.lineHeight = "24px";

signUpButton.style.background = "#0e0b3d";
signUpButton.style.fontSize = "14px";
signUpButton.style.fontWeight = "400";
signUpButton.style.lineHeight = "16.1px";
signUpButton.style.color = "white";
signUpButton.style.padding = "8px 18px";
signUpButton.style.borderRadius = "40px";
signUpButton.style.border = "none";

const mainLink = document.createElement("a");
mainLink.href = "#";
mainLink.textContent = "COLLECT FORM SUBMISSIONS";

const mainHeading = document.createElement("h1");
mainHeading.innerHTML = "Get emails and messages <br /> from your HTML form";

const mainParagraph = document.createElement("p");
mainParagraph.innerHTML =
  "Code your own HTML form and style it, then point your form to formcarry to get <br /> email notifications, upload files, block spam and integrate with other apps.";

const getStartedButton = document.createElement("button");
getStartedButton.textContent = "Get Started";

main.appendChild(mainLink);
main.appendChild(mainHeading);
main.appendChild(mainParagraph);
main.appendChild(getStartedButton);

mainLink.style.fontSize = "14px";
mainLink.style.fontWeight = "700";
mainLink.style.lineHeight = "24px";
mainLink.style.color = "#1463ff";
mainLink.style.textDecoration = "none";

mainHeading.style.fontSize = "54px";
mainHeading.style.fontWeight = "400";
mainHeading.style.lineHeight = "72px";
mainHeading.style.letterSpacing = "2.56px";

mainParagraph.style.fontSize = "17px";
mainParagraph.style.fontWeight = "400";
mainParagraph.style.lineHeight = "36px";
mainParagraph.style.letterSpacing = "0.18px";

getStartedButton.style.fontSize = "13px";
getStartedButton.style.fontWeight = "400";
getStartedButton.style.lineHeight = "24px";
getStartedButton.style.textAlign = "center";
getStartedButton.style.boxShadow = "0px 1px 2px 0px #71749814";
getStartedButton.style.background = "#030122";
getStartedButton.style.border = "none";
getStartedButton.style.borderRadius = "50px";
getStartedButton.style.padding = "12px 20px";
getStartedButton.style.color = "white";
getStartedButton.style.marginTop = "80px";

const footerParagraph = document.createElement("p");
footerParagraph.textContent = "formcarry. all rights reserved";

const footerLinks = document.createElement("div");
footerLinks.className = "footer_links";

const footerLinksArray = ["Terms of Service", "Privacy Policy"];
footerLinksArray.forEach((text) => {
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = text;
  footerLinks.appendChild(a);
});

const socialDiv = document.createElement("div");
socialDiv.className = "social";

const socialIcons = ["/twiter.svg", "/facebook.svg", "/github.svg"];
socialIcons.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  socialDiv.appendChild(img);
});

footer.appendChild(footerParagraph);
footer.appendChild(footerLinks);
footer.appendChild(socialDiv);

footerParagraph.style.fontSize = "13px";
footerParagraph.style.fontWeight = "400";
footerParagraph.style.lineHeight = "24px";

const footerAnchorTags = footerLinks.querySelectorAll("a");
footerAnchorTags.forEach((link) => {
  link.style.fontSize = "13px";
  link.style.fontWeight = "400";
  link.style.lineHeight = "24px";
  link.style.textDecoration = "none";
  link.style.margin = "0 12px";
});

socialDiv.style.display = "flex";
socialDiv.style.alignItems = "center";
socialDiv.style.gap = "12px";
