let highestZ = 1;

class Paper {
  constructor() {
    this.holdingPaper = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchMoveX = 0;
    this.touchMoveY = 0;
    this.prevTouchX = 0;
    this.prevTouchY = 0;
    this.velX = 0;
    this.velY = 0;
    this.rotation = Math.random() * 30 - 15;
    this.currentPaperX = 0;
    this.currentPaperY = 0;
    this.rotating = false;
    this.touchStartDistance = 0;
  }

  getDistance(touches) {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  init(paper) {
    paper.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        // Single touch: Move the paper
        this.holdingPaper = true;
        paper.style.zIndex = highestZ++;
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.prevTouchX = this.touchStartX;
        this.prevTouchY = this.touchStartY;
      } else if (e.touches.length === 2) {
        // Two-finger touch: Start rotating
        this.rotating = true;
        this.touchStartDistance = this.getDistance(e.touches);
      }
    }, { passive: false });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.holdingPaper && e.touches.length === 1) {
        // Move the paper
        this.touchMoveX = e.touches[0].clientX;
        this.touchMoveY = e.touches[0].clientY;

        this.velX = this.touchMoveX - this.prevTouchX;
        this.velY = this.touchMoveY - this.prevTouchY;

        this.currentPaperX += this.velX;
        this.currentPaperY += this.velY;

        this.prevTouchX = this.touchMoveX;
        this.prevTouchY = this.touchMoveY;
      } else if (this.rotating && e.touches.length === 2) {
        // Rotate the paper
        const newDistance = this.getDistance(e.touches);
        const scaleChange = newDistance / this.touchStartDistance;
        this.rotation += (scaleChange - 1) * 30; // Adjust sensitivity
        this.touchStartDistance = newDistance;
      }

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotate(${this.rotation}deg)`;
    }, { passive: false });

    paper.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        this.holdingPaper = false;
        this.rotating = false;
      }
    });
  }
}

const papers = document.querySelectorAll('.paper');
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
