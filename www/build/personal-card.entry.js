import { r as registerInstance, h } from './index-08f0b029.js';
import { f as format } from './utils-6837ff93.js';

const personalCardCss = ".b-personal-card-box{transition:all 0.3s ease-in-out;box-shadow:0 0 2rem rgba(0, 0, 255, 0.1);border-radius:1rem}.b-personal-card{background-color:#fff;box-shadow:0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);color:#4a4a4a;max-width:100%;position:relative;text-align:center;border-radius:1rem}.b-personal-card__content{padding:1.5rem}.b-personal-card__full-name{text-transform:uppercase;letter-spacing:2px;font-size:1rem}.b-personal-card__photo{border-radius:50%;border:6px solid #e6e6ef}.b-personal-card__resume{color:#aaaaaa}h3{color:blue}";

const PersonalCardComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.firstName = '';
    this.lastName = '';
    this.photo = '';
    this.resume = '';
    this.role = '';
  }
  getText() {
    return format(this.firstName, '', this.lastName);
  }
  render() {
    return (h("div", { class: "b-personal-card-box" }, h("div", { class: "b-personal-card" }, h("div", { class: "b-personal-card__content" }, h("div", { class: "alert alert-warning" }, "Inside web component"), h("div", { class: "b-personal-card__photo-container" }, h("img", { class: "b-personal-card__photo", src: this.photo, alt: "Andres Felipe Gomez Salazar" })), h("h2", { class: "b-personal-card__full-name" }, this.getText(), "."), h("h3", null, this.role), h("div", { class: "b-personal-card__resume" }, this.resume)))));
  }
};
PersonalCardComponent.style = personalCardCss;

export { PersonalCardComponent as personal_card };

//# sourceMappingURL=personal-card.entry.js.map