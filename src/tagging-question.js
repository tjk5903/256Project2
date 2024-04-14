import { LitElement, html, css } from 'lit';

export class TaggingQuestion extends LitElement {
  static styles = css`
    .tagging-question-container {
      background-color: #f3e9e0; 
      padding: 20px;
      border-radius: 15px;
      width: 80%;
      margin: 0 auto;
    }

    /* Add other CSS styles as needed */
  `;

  render() {
    return html`
      <div class="tagging-question-container">
        <h2>Placeholder Text: Tagging Question Component</h2>
        <p>This is a placeholder text to verify that the component is being rendered correctly.</p>
      </div>
    `;
  }
}

customElements.define('tagging-question', TaggingQuestion);