const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progress-bar");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  currentStep++;
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  updateProgress();
});

function updateProgress() {
  // Boundary checks
  currentStep = Math.max(1, Math.min(currentStep, steps.length));

  // Update steps
  steps.forEach((step, index) => {
    step.classList.remove("active", "completed");

    if (index + 1 < currentStep) {
      step.classList.add("completed");
    } else if (index + 1 === currentStep) {
      step.classList.add("active");
    }
  });

  // Update progress bar
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
  progressBar.style.width = progressPercentage + "%";

  // Update buttons
  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === steps.length;
}
