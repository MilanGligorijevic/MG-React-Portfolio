function scrollWithOffset(element) {
  const yCoordinate = element.getBoundingClientRect().top + window.scrollY;

  switch (element.id) {
    case "projects":
      const projectsOffset = -100;
      window.scrollTo({
        top: yCoordinate + projectsOffset,
        behavior: "smooth",
      });
      break;
    case "skills":
      const skillsOffset = -80;
      window.scrollTo({
        top: yCoordinate + skillsOffset,
        behavior: "smooth",
      });
      break;
    case "about":
      const aboutOffset = -120;
      window.scrollTo({
        top: yCoordinate + aboutOffset,
        behavior: "smooth",
      });
      break;
    case "contact":
      break;
    default:
      console.log("default");
  }
}

export default scrollWithOffset;
