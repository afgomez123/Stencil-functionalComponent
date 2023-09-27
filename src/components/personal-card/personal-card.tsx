import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'personal-card',
  styleUrl: 'personal-card.css',
  shadow: true,
})
export class PersonalCardComponent {
  @Prop() firstName: string = '';
  @Prop() lastName: string = '';
  @Prop() photo: string = '';
  @Prop() resume: string = '';
  @Prop() role: string = '';

  private getText(): string {
    return format(this.firstName, '', this.lastName);
  }

  render() {
    return (
      <div class="b-personal-card-box">
        <div class="b-personal-card">
          <div class="b-personal-card__content">
            <div class="alert alert-warning">Inside web component</div>
            <div class="b-personal-card__photo-container">
              <img class="b-personal-card__photo" src={this.photo} alt="Andres Felipe Gomez Salazar" />
            </div>
            <h2 class="b-personal-card__full-name">{this.getText()}.</h2>
            <h3>{this.role}</h3>
            <div class="b-personal-card__resume">{this.resume}</div>
          </div>
        </div>
      </div>
    );
  }
}
