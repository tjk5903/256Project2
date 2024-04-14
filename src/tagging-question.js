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

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .tag {
      background-color: #d4d4d4; /* Tag color */
      padding: 8px 12px;
      border-radius: 20px;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .tag.correct {
      background-color: #6bd425; /* Green color for correct tags */
    }

    .tag.incorrect {
      background-color: #ff6961; /* Red color for incorrect tags */
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

  static properties = {
    tagData: { type: Array }, // Array of tag objects { value: string, correct: boolean, feedback: string }
  };

  constructor() {
    super();
    this.tagData = [];
  }

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
          ${this.tagData.map(
            (tag) => html`
              <div 
                class="tag ${tag.correct ? 'correct' : 'incorrect'}" 
                draggable="true" 
                @dragstart="${(e) => this.dragStart(e, tag)}"
              >
                ${tag.value}
              </div>
            `
          )}
        </div>
        <div 
          class="answer-area" 
          @dragover="${this.allowDrop}" 
          @drop="${this.drop}"
        >
          <!-- Answer area where tags will be dropped -->
        </div>
        <button class="check-answer-btn" disabled>Check Answer</button>
        <button class="reset-btn">Reset</button>
      </div>
    `;
  }

  dragStart(e, tag) {
    e.dataTransfer.setData('text/plain', tag.value);
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drop(e) {
    e.preventDefault();
    const tagValue = e.dataTransfer.getData('text/plain');
    // Handle dropped tag here
    console.log('Dropped tag:', tagValue);
  }
}

customElements.define('tagging-question', TaggingQuestion);
