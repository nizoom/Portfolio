export function firstVisit() {
  sessionStorage.setItem("visited-already", "subsequent visit");
}

export function getLocalVisitStatus() {
  return sessionStorage.getItem("visited-already");
}
