import { LitElement, html, css } from 'lit';

export class TaggingQuestion extends LitElement {
  static styles = css`
    .tagging-question-container {
      background-color: #f3e9e0; /* Seashell color */
      padding: 20px;
      border-radius: 15px;
      width: 80%;
      margin: 0 auto;
    }

    .tags-container {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }

    .available-tags {
      display: flex;
    }

    .tag {
      background-color: #d4d4d4; /* Tag color */
      padding: 8px 12px;
      border-radius: 20px;
      margin-right: 10px;
      cursor: pointer;
    }

    .answer-area {
      min-height: 100px;
      border: 2px dashed #ccc; /* Dashed border to indicate drop area */
      margin-top: 20px;
    }

    .check-answer-btn,
    .reset-btn {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff; /* Blue color for buttons */
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .check-answer-btn:disabled {
      background-color: #ccc; /* Disabled button color */
      cursor: not-allowed;
    }
  `;

  render() {
    return html`
      <div class="tagging-question-container">
        <div class="question">
          <!-- Question text and optional image slot -->
          <slot name="question-text"></slot>
          <slot name="question-image"></slot>
        </div>
        <div class="tags-container">
          <!-- Available tags -->
          <div class="available-tags">
            <!-- Tags will be dynamically generated here -->
          </div>
        </div>
        <div class="answer-area">
          <!-- Answer area where tags will be dropped -->
        </div>
        <button class="check-answer-btn" disabled>Check Answer</button>
        <button class="reset-btn">Reset</button>
      </div>
    `;
  }
}

customElements.define('tagging-question', TaggingQuestion);