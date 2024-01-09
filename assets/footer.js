function footer() {
  // Create the outermost <div> element with class "footer"
  let footerDiv = document.createElement("div");
  footerDiv.className = "footer";

  // Create the child <div> element with classes "content" and "has-text-centered"
  let contentDiv = document.createElement("div");
  contentDiv.className = "content has-text-centered";

  // Create the first <a> element for the GitHub link
  let githubLink = document.createElement("a");
  githubLink.href = "https://github.com/We1337/Web-Application-for-Tartary-Team";
  githubLink.textContent = " GitHub ";

  // Create the second <a> element for the Twitter link
  let twitterLink = document.createElement("a");
  twitterLink.href = "https://twitter.com/We_1337";
  twitterLink.textContent = " X ";

  // Append the <a> elements to the "content" <div>
  contentDiv.appendChild(githubLink);
  contentDiv.appendChild(twitterLink);

  // Append the "content" <div> to the outer "footer" <div>
  footerDiv.appendChild(contentDiv);

  // Create the <hr> element
  let hrElement = document.createElement("hr");

  // Append the <hr> element to the outer "footer" <div>
  footerDiv.appendChild(hrElement);

  // Append the entire "footer" <div> to the document body
  document.body.appendChild(footerDiv);
};
