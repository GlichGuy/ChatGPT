const MAIN_REST = 90;
const ACCESSORY_REST = 60;
const WORK_SECONDS = 45;

const routine = [
  { name: "Fondos en paralelas", sets: 4, reps: "6-10", restType: "main" },
  { name: "Flexiones declinadas", sets: 4, reps: "8-12", restType: "main" },
  { name: "Pike push-ups (hombro)", sets: 4, reps: "8-12", restType: "main" },
  { name: "Flexiones explosivas", sets: 3, reps: "6-8", restType: "accessory" },
  { name: "Planche lean hold", sets: 3, hold: "20 seg", workDuration: 20, restType: "accessory" },
  { name: "Core: hollow hold", sets: 3, hold: "30 seg", workDuration: 30, restType: "accessory" },
];

const phaseLabel = document.getElementById("phaseLabel");
const exerciseName = document.getElementById("exerciseName");
const timerEl = document.getElementById("timer");
const setInfo = document.getElementById("setInfo");
const routineList = document.getElementById("routineList");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const skipBtn = document.getElementById("skipBtn");

let exerciseIndex = 0;
let currentSet = 1;
let phase = "idle"; // idle | work | rest | done
let timeLeft = 0;
let intervalId = null;
let restForNextExercise = false;

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderRoutine() {
  routineList.innerHTML = "";
  routine.forEach((exercise) => {
    const li = document.createElement("li");
    const target = exercise.hold ? `${exercise.hold}` : `${exercise.reps} reps`;
    li.textContent = `${exercise.name} — ${exercise.sets} series (${target})`;
    routineList.appendChild(li);
  });
}

function updateView() {
  if (phase === "done") {
    phaseLabel.textContent = "Rutina terminada ✅";
    phaseLabel.className = "phase finished";
    exerciseName.textContent = "¡Buen trabajo!";
    setInfo.textContent = "Completaste todas las series.";
    timerEl.textContent = "00:00";
    return;
  }

  const current = routine[exerciseIndex];
  exerciseName.textContent = current.name;
  setInfo.textContent = `Serie ${currentSet} de ${current.sets}`;
  timerEl.textContent = formatTime(timeLeft);

  if (phase === "work") {
    phaseLabel.textContent = "Trabajo";
    phaseLabel.className = "phase";
  } else if (phase === "rest") {
    phaseLabel.textContent = "Descanso";
    phaseLabel.className = "phase resting";
  } else {
    phaseLabel.textContent = "Listo para empezar";
    phaseLabel.className = "phase";
    timerEl.textContent = "00:00";
    setInfo.textContent = `Serie 1 de ${current.sets}`;
  }
}

function getWorkSeconds(exercise) {
  return exercise.workDuration ?? WORK_SECONDS;
}

function getRestSeconds(exercise) {
  return exercise.restType === "main" ? MAIN_REST : ACCESSORY_REST;
}

function clearTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function setControls(running) {
  startBtn.disabled = running;
  pauseBtn.disabled = !running;
  skipBtn.disabled = !running;
}

function startPhase(nextPhase) {
  phase = nextPhase;
  const current = routine[exerciseIndex];
  timeLeft = nextPhase === "work" ? getWorkSeconds(current) : getRestSeconds(current);
  updateView();
}

function advance() {
  const current = routine[exerciseIndex];

  if (phase === "work") {
    if (currentSet < current.sets) {
      restForNextExercise = false;
      startPhase("rest");
      return;
    }

    if (exerciseIndex < routine.length - 1) {
      exerciseIndex += 1;
      currentSet = 1;
      restForNextExercise = true;
      startPhase("rest");
      return;
    }

    phase = "done";
    clearTimer();
    setControls(false);
    skipBtn.disabled = true;
    updateView();
    return;
  }

  if (phase === "rest") {
    if (!restForNextExercise && currentSet < current.sets) {
      currentSet += 1;
    }
    restForNextExercise = false;
    phase = "work";
    timeLeft = getWorkSeconds(current);
    updateView();
  }
}

function tick() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    updateView();
    return;
  }
  advance();
}

function start() {
  if (phase === "idle") {
    phase = "work";
    timeLeft = getWorkSeconds(routine[exerciseIndex]);
  }
  if (phase === "done") return;

  setControls(true);
  updateView();
  clearTimer();
  intervalId = setInterval(tick, 1000);
}

function pause() {
  clearTimer();
  setControls(false);
}

function reset() {
  clearTimer();
  exerciseIndex = 0;
  currentSet = 1;
  phase = "idle";
  timeLeft = 0;
  setControls(false);
  skipBtn.disabled = true;
  restForNextExercise = false;
  updateView();
}

function skip() {
  if (phase === "idle" || phase === "done") return;
  timeLeft = 0;
  tick();
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
skipBtn.addEventListener("click", skip);

renderRoutine();
updateView();
