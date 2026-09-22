"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";

import { ArrowRightIcon } from "@/components/ui/icons";

export type BmiCalculatorMode = "empty" | "result" | "invalid";

interface BmiCalculatorCopy {
  eyebrow: string;
  title: string;
  description: string;
  feet: string;
  inches: string;
  weight: string;
  calculate: string;
  emptyTitle: string;
  emptyDescription: string;
  invalidTitle: string;
  invalidDescription: string;
  score: string;
  underweight: string;
  healthy: string;
  overweight: string;
  obesity: string;
  categoryPrefix: string;
  categorySuffix: string;
  options: string;
  disclaimer: string;
}

interface BmiCalculatorProps {
  copy?: BmiCalculatorCopy;
  initialMode?: BmiCalculatorMode;
}

const defaultCopy: BmiCalculatorCopy = {
  eyebrow: "CHECK YOUR ELIGIBILITY",
  title: "Could a GLP-1 program be right for you?",
  description: "Enter your height and weight below",
  feet: "Height (feet)",
  inches: "Height (inches)",
  weight: "Weight (lb)",
  calculate: "Calculate BMI",
  emptyTitle: "Your result will appear here.",
  emptyDescription:
    "BMI is one screening measure. A licensed clinician considers your full medical history before recommending treatment.",
  invalidTitle: "Check your measurements.",
  invalidDescription:
    "Enter a height between 3 and 8 feet, 0 to 11 inches, and a weight between 50 and 1,000 pounds.",
  score: "BMI Score",
  underweight: "Underweight",
  healthy: "Healthy range",
  overweight: "Overweight",
  obesity: "Obesity",
  categoryPrefix: "Your estimated range is",
  categorySuffix: ".",
  options: "See your GLP-1 Options",
  disclaimer:
    "This estimate is for educational purposes only and is not a diagnosis or medical advice.",
};

function SortIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 shrink-0 text-[#758c7d]"
    >
      <path
        d="m12 3-5.5 7h11L12 3Zm0 18 5.5-7h-11l5.5 7Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface MeasurementInputProps {
  id: string;
  label: string;
  ariaLabel: string;
  unit: string;
  value: string;
  min: string;
  max: string;
  step: string;
  invalid: boolean;
  onChange: (value: string) => void;
  className?: string;
}

function MeasurementInput({
  id,
  label,
  ariaLabel,
  unit,
  value,
  min,
  max,
  step,
  invalid,
  onChange,
  className = "",
}: MeasurementInputProps) {
  return (
    <label className={`block min-w-0 ${className}`}>
      <span className="mb-2 block h-3.5 text-sm leading-[14px] text-[#3b3b3c] xl:h-4 xl:text-base xl:leading-4">
        {label}
      </span>
      <span
        className={`flex h-10 items-center rounded-full border bg-[#f6f8fa] px-4 text-[#111111] xl:h-[52px] ${
          invalid ? "border-red-600" : "border-[#cddcd3]"
        }`}
      >
        <input
          id={id}
          name={id.replace("bmi-", "")}
          aria-label={ariaLabel}
          type="number"
          inputMode={unit === "lbs" ? "decimal" : "numeric"}
          min={min}
          max={max}
          step={step}
          value={value}
          placeholder="0"
          aria-invalid={invalid}
          onFocus={() => {
            if (value === "0") onChange("");
          }}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 appearance-none bg-transparent !text-lg !leading-[1.6] text-[#111111] outline-none placeholder:text-[#111111] focus:placeholder:text-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <SortIcon />
        <span className="text-lg leading-[1.6] text-[#6f6f6f]">{unit}</span>
      </span>
    </label>
  );
}

interface RadioOptionProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function RadioOption({ label, checked, onChange }: RadioOptionProps) {
  return (
    <label className="flex h-10 min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-full border border-[#cddcd3] px-3 text-lg leading-[1.6] text-[#111111] xl:h-[52px] xl:w-[123px] xl:flex-none xl:px-4 xl:py-2.5">
      <input
        type="radio"
        name="sex"
        value={label.toLowerCase()}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className="relative size-6 shrink-0"
      >
        <span
          className={`absolute left-[1.25px] top-[1.25px] grid size-[21.5px] place-items-center rounded-full border-2 ${
            checked ? "border-[#102b1c]" : "border-[#afc1b6]"
          }`}
        >
          <span
            className={`size-3 rounded-full ${
              checked ? "bg-[#102b1c]" : "border border-[#afc1b6]"
            }`}
          />
        </span>
      </span>
      {label}
    </label>
  );
}

interface ScoreRingProps {
  score: number | null;
  label: string;
  progress: number;
}

function ScoreRing({ score, label, progress }: ScoreRingProps) {
  const greenLength =
    score === null ? 0 : Math.min(42, Math.max(22, progress * 0.44));

  return (
    <div className="relative mx-auto size-[137px] shrink-0 xl:size-[217px]">
      <svg viewBox="0 0 217 217" className="size-full" aria-hidden="true">
        <circle
          cx="108.5"
          cy="108.5"
          r="107"
          fill="none"
          stroke="#a0a0a1"
          strokeWidth="1"
          strokeDasharray="2 4 6 8"
        />
        <circle
          cx="108.5"
          cy="108.5"
          r="93.4"
          className="xl:hidden"
          fill="none"
          stroke="#009269"
          strokeOpacity="0.2"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="39 61"
          transform="rotate(104 108.5 108.5)"
        />
        <circle
          cx="108.5"
          cy="108.5"
          r="88.4"
          className="hidden xl:block"
          fill="none"
          stroke="#009269"
          strokeOpacity="0.2"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="39 61"
          transform="rotate(104 108.5 108.5)"
        />
        {score !== null ? (
          <>
            <circle
              cx="108.5"
              cy="108.5"
              r="93.4"
              className="xl:hidden"
              fill="none"
              stroke="#009269"
              strokeWidth="10"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray={`${greenLength} ${100 - greenLength}`}
              transform="rotate(-74 108.5 108.5)"
            />
            <circle
              cx="108.5"
              cy="108.5"
              r="88.4"
              className="hidden xl:block"
              fill="none"
              stroke="#009269"
              strokeWidth="10"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray={`${greenLength} ${100 - greenLength}`}
              transform="rotate(-74 108.5 108.5)"
            />
          </>
        ) : null}
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center text-[#111111]">
        <div>
          <p className="text-[52px] font-normal leading-[1.1]">
            {score ?? "--"}
          </p>
          <p className="mt-1 text-sm leading-[1.6] xl:text-lg xl:leading-6">
            Your {label}
          </p>
        </div>
      </div>
    </div>
  );
}

interface MeasurementState {
  feetValid: boolean;
  inchesValid: boolean;
  weightValid: boolean;
  score: number | null;
}

function evaluateMeasurements(
  feetValue: string,
  inchesValue: string,
  weightValue: string,
): MeasurementState {
  const feet = Number(feetValue);
  const inches = Number(inchesValue);
  const weight = Number(weightValue);

  const feetValid =
    feetValue.trim() !== "" &&
    Number.isInteger(feet) &&
    feet >= 3 &&
    feet <= 8;
  const inchesValid =
    inchesValue.trim() !== "" &&
    Number.isInteger(inches) &&
    inches >= 0 &&
    inches <= 11;
  const weightValid =
    weightValue.trim() !== "" &&
    Number.isFinite(weight) &&
    weight >= 50 &&
    weight <= 1000;

  if (!feetValid || !inchesValid || !weightValid) {
    return { feetValid, inchesValid, weightValid, score: null };
  }

  const totalInches = feet * 12 + inches;
  const score = (weight / totalInches ** 2) * 703;

  return {
    feetValid,
    inchesValid,
    weightValid,
    score: Math.round(score * 10) / 10,
  };
}

function evaluateMetricMeasurements(
  heightValue: string,
  weightValue: string,
): MeasurementState {
  const height = Number(heightValue);
  const weight = Number(weightValue);
  const feetValid =
    heightValue.trim() !== "" &&
    Number.isFinite(height) &&
    height >= 92 &&
    height <= 272;
  const weightValid =
    weightValue.trim() !== "" &&
    Number.isFinite(weight) &&
    weight >= 23 &&
    weight <= 454;

  if (!feetValid || !weightValid) {
    return { feetValid, inchesValid: true, weightValid, score: null };
  }

  const score = weight / (height / 100) ** 2;
  return {
    feetValid,
    inchesValid: true,
    weightValid,
    score: Math.round(score * 10) / 10,
  };
}

export function BmiCalculator({
  copy = defaultCopy,
  initialMode = "empty",
}: BmiCalculatorProps) {
  const initialFeet = initialMode === "empty" ? "" : "5";
  const initialInches = initialMode === "empty" ? "" : "8";
  const initialWeight =
    initialMode === "empty" ? "" : initialMode === "invalid" ? "0" : "165";
  const initialScore =
    initialMode === "result"
      ? evaluateMeasurements(initialFeet, initialInches, initialWeight).score
      : null;

  const [feet, setFeet] = useState(initialFeet);
  const [inches, setInches] = useState(initialInches);
  const [weight, setWeight] = useState(initialWeight);
  const [centimeters, setCentimeters] = useState("");
  const [kilograms, setKilograms] = useState("");
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">(
    "imperial",
  );
  const [sex, setSex] = useState<"male" | "female">("female");
  const [submitted, setSubmitted] = useState(initialMode !== "empty");
  const [score, setScore] = useState<number | null>(initialScore);

  const measurement =
    unitSystem === "imperial"
      ? evaluateMeasurements(feet, inches, weight)
      : evaluateMetricMeasurements(centimeters, kilograms);
  const category =
    score === null
      ? null
      : score < 18.5
        ? copy.underweight
        : score < 25
          ? copy.healthy
          : score < 30
            ? copy.overweight
            : copy.obesity;
  const progress =
    score === null
      ? 0
      : Math.min(95, Math.max(8, ((score - 14) / 26) * 100));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setScore(measurement.score);
  }

  function clearResultWhenInvalid(nextMeasurement: MeasurementState) {
    if (nextMeasurement.score === null) {
      setScore(null);
      setSubmitted(false);
    }
  }

  function changeFeet(value: string) {
    setFeet(value);
    clearResultWhenInvalid(evaluateMeasurements(value, inches, weight));
  }

  function changeInches(value: string) {
    setInches(value);
    clearResultWhenInvalid(evaluateMeasurements(feet, value, weight));
  }

  function changeWeight(value: string) {
    setWeight(value);
    clearResultWhenInvalid(evaluateMeasurements(feet, inches, value));
  }

  function changeCentimeters(value: string) {
    setCentimeters(value);
    clearResultWhenInvalid(evaluateMetricMeasurements(value, kilograms));
  }

  function changeKilograms(value: string) {
    setKilograms(value);
    clearResultWhenInvalid(evaluateMetricMeasurements(centimeters, value));
  }

  function changeUnitSystem(nextUnit: "imperial" | "metric") {
    if (nextUnit === unitSystem) return;
    setUnitSystem(nextUnit);
    setScore(null);
    setSubmitted(false);
  }

  return (
    <section
      id="bmi"
      aria-labelledby="bmi-title"
      className="mx-auto w-full max-w-[1344px] scroll-mt-8 px-5 pb-5 pt-8 xl:px-3"
    >
      <div className="h-[566px] rounded-2xl bg-white xl:h-[600px] xl:rounded-[32px] xl:p-3">
        <div className="relative h-[566px] overflow-hidden rounded-2xl bg-[#3c3a3a] p-3 shadow-[0_4px_12px_rgba(2,31,24,0.06)] xl:flex xl:h-[576px] xl:flex-col xl:items-center xl:justify-center xl:gap-8 xl:p-10">
          <Image
            src="/images/stretching.webp"
            alt=""
            fill
            sizes="(max-width: 1344px) calc(100vw - 48px), 1296px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#3c3a3a]/60" />

          <div className="relative mx-auto grid h-full max-w-[1168px] gap-6 xl:h-[496px] xl:w-full xl:grid-cols-[555px_589px]">
            <form
              noValidate
              autoComplete="off"
              onSubmit={submit}
              className="flex h-[542px] min-h-0 flex-col rounded-xl border border-[#bcffe6] bg-white p-3 text-[#111111] shadow-[0_4px_21.6px_rgba(2,29,23,0.06)] xl:h-[496px] xl:rounded-2xl xl:p-6"
            >
            <div className="hidden items-center justify-between text-base uppercase leading-[1.32] tracking-[2px] text-[#00774d] xl:flex">
              <p>{copy.eyebrow}</p>
              <p>BMI</p>
            </div>

            <h2
              id="bmi-title"
              className="h-12 max-w-[287px] text-lg font-normal leading-[1.32] text-[#111111] xl:mt-3 xl:h-auto xl:max-w-[313px] xl:text-2xl xl:font-medium xl:leading-[1.16]"
            >
              {copy.title}
            </h2>

            <p className="mt-2 text-sm leading-[1.6] text-[#3b3b3c] xl:mt-4 xl:text-lg">
              {copy.description}
            </p>

            <div className="mt-1 xl:hidden">
              <ScoreRing
                score={score}
                label="Score"
                progress={progress}
              />
            </div>

            <div className="hidden h-[52px] w-[180px] shrink-0 items-center gap-1 rounded-full border-[0.5px] border-[#102b1c] p-1 text-sm font-medium leading-[1.6] xl:flex">
              <button
                type="button"
                aria-pressed={unitSystem === "imperial"}
                onClick={() => changeUnitSystem("imperial")}
                className={`h-[43px] w-[83px] rounded-full px-4 ${
                  unitSystem === "imperial"
                    ? "bg-[#102b1c] text-white"
                    : "text-[#102b1c]"
                }`}
              >
                ft / lbs
              </button>
              <button
                type="button"
                aria-pressed={unitSystem === "metric"}
                onClick={() => changeUnitSystem("metric")}
                className={`h-[43px] flex-1 rounded-full px-3 ${
                  unitSystem === "metric"
                    ? "bg-[#102b1c] text-white"
                    : "text-[#102b1c]"
                }`}
              >
                cm/kgs
              </button>
            </div>

            <div className="mt-6 grid gap-2 xl:mt-4 xl:grid-cols-[258px_235px] xl:gap-x-3 xl:gap-y-2">
              {unitSystem === "imperial" ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <MeasurementInput id="bmi-feet" label="Height" ariaLabel={copy.feet} unit="ft" value={feet} min="3" max="8" step="1" invalid={submitted && !measurement.feetValid} onChange={changeFeet} />
                    <MeasurementInput id="bmi-inches" label="" ariaLabel={copy.inches} unit="in" value={inches} min="0" max="11" step="1" invalid={submitted && !measurement.inchesValid} onChange={changeInches} />
                  </div>
                  <MeasurementInput id="bmi-weight" label="Weight" ariaLabel={copy.weight} unit="lbs" value={weight} min="50" max="1000" step="0.1" invalid={submitted && !measurement.weightValid} onChange={changeWeight} />
                </>
              ) : (
                <>
                  <MeasurementInput id="bmi-centimeters" label="Height" ariaLabel="Height (centimeters)" unit="cm" value={centimeters} min="92" max="272" step="0.1" invalid={submitted && !measurement.feetValid} onChange={changeCentimeters} />
                  <MeasurementInput id="bmi-kilograms" label="Weight" ariaLabel="Weight (kilograms)" unit="kg" value={kilograms} min="23" max="454" step="0.1" invalid={submitted && !measurement.weightValid} onChange={changeKilograms} />
                </>
              )}

              <fieldset className="mt-1 h-[62px] w-full xl:col-span-2 xl:mt-0 xl:h-[76px] xl:w-[258px]">
                <legend className="mb-2 h-3.5 text-sm leading-[14px] text-[#3b3b3c] xl:h-4 xl:text-base xl:leading-4">
                  Sex
                </legend>
                <div className="flex h-10 w-full gap-3 xl:h-[52px] xl:w-[258px]">
                  <RadioOption
                    label="Male"
                    checked={sex === "male"}
                    onChange={() => setSex("male")}
                  />
                  <RadioOption
                    label="Female"
                    checked={sex === "female"}
                    onChange={() => setSex("female")}
                  />
                </div>
              </fieldset>
            </div>

            <button
              type="submit"
              className="mt-6 flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#102b1c] px-8 !text-lg !leading-[1.32] text-white transition duration-200 hover:bg-[#17432b] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 motion-reduce:transition-none xl:mt-auto xl:h-14 xl:py-4"
            >
              {copy.calculate}
            </button>
          </form>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="hidden min-h-[393px] flex-col rounded-2xl border-t border-[rgba(12,27,46,0.08)] bg-white px-6 py-8 text-[#111111] shadow-[0_4px_21.6px_rgba(2,29,23,0.06)] xl:flex xl:h-[393px] xl:min-h-0 xl:self-end"
          >
            {submitted && score === null ? (
              <div className="m-auto max-w-md text-center">
                <p className="text-2xl font-medium text-[#102b1c]">
                  {copy.invalidTitle}
                </p>
                <p className="mt-3 leading-7 text-[#3b3b3c]">
                  {copy.invalidDescription}
                </p>
              </div>
            ) : score === null ? (
              <div className="m-auto max-w-md text-center">
                <p className="text-2xl font-medium text-[#102b1c]">
                  {copy.emptyTitle}
                </p>
                <p className="mt-3 leading-7 text-[#3b3b3c]">
                  {copy.emptyDescription}
                </p>
              </div>
            ) : (
              <output className="flex h-full flex-col gap-6">
                <div className="flex h-[279px] flex-col gap-8">
                  <ScoreRing
                    score={score}
                    label={copy.score}
                    progress={progress}
                  />

                  <div className="flex h-[30px] flex-col gap-3">
                    <div className="h-1.5 shrink-0 rounded-full bg-[linear-gradient(90deg,#3b82f6_0%,#1a8a79_32%,#f59e0b_67%,#ef4444_100%)]" />
                    <div className="flex h-3 items-center justify-between whitespace-nowrap text-center text-xs leading-3 text-[#6c6c6c]">
                      <span>Underweight &lt;18.5</span>
                      <span>Healthy 18.5 - 24.9</span>
                      <span>Overweight &lt;25.0 - 29.9</span>
                      <span>Obesity ≥ 30</span>
                    </div>
                  </div>
                </div>

                {score !== null && category ? (
                  <p className="sr-only">
                    {copy.categoryPrefix} <strong>{category}</strong>
                    {copy.categorySuffix}
                  </p>
                ) : null}
                <a
                  href="#contact"
                  className="group inline-flex h-6 w-full items-center gap-2 rounded-sm text-base leading-[1.24] text-[#102b1c] hover:text-[#00774d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
                >
                  {copy.options}
                  <span className="relative size-6 shrink-0">
                    <span className="absolute left-[1.25px] top-[1.25px] grid size-[21.5px] place-items-center rounded-full border border-[#102b1c]">
                    <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </output>
            )}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
