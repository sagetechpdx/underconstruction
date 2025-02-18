'use client'

import Image from 'next/image'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { Button } from '@/components/Button'
import { ArrowRightIcon } from '@heroicons/react/20/solid'












import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

function SymptomChecker() {
  const [deviceType, setDeviceType] = useState("");
  const [issueType, setIssueType] = useState("");

  const issues = {
    Windows: ["No Audio", "Won't Turn On", "Blue Screen"],
    Mac: ["No Audio", "Overheating", "Won't Boot"],
  };

  const solutions = {
    Windows: {
      "No Audio": "Check sound settings, update drivers, or try a different output.",
      "Won't Turn On": "Check power source, battery, and RAM.",
      "Blue Screen": "Run a system restore or check hardware issues.",
    },
    Mac: {
      "No Audio": "Ensure correct output is selected and reset PRAM/NVRAM.",
      "Overheating": "Clean fans and check background apps.",
      "Won't Boot": "Try Safe Mode or reinstall macOS.",
    },
  };

  // Update progress bar dynamically based on user selection
  const steps = [
    { id: "01", name: "Device Type", status: deviceType ? "complete" : "current" },
    { id: "02", name: "Symptoms", status: issueType ? "complete" : deviceType ? "current" : "upcoming" },
    { id: "03", name: "Possible Causes", status: issueType ? "current" : "upcoming" },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold">Computer Symptom Checker</h2>

      {/* Progress Bar */}
      <nav aria-label="Progress" className="mt-4">
        <ol className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex md:flex-1">
              {step.status === "complete" ? (
                <span className="group flex w-full items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                      <CheckIcon className="size-6 text-white" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </span>
                </span>
              ) : step.status === "current" ? (
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                    <span className="text-indigo-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
                </span>
              ) : (
                <span className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300">
                      <span className="text-gray-500">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500">{step.name}</span>
                  </span>
                </span>
              )}

              {stepIdx !== steps.length - 1 && (
                <div aria-hidden="true" className="absolute top-0 right-0 hidden h-full w-5 md:block">
                  <svg fill="none" viewBox="0 0 22 80" preserveAspectRatio="none" className="size-full text-gray-300">
                    <path d="M0 -2L20 40L0 82" stroke="currentColor" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Device Type Dropdown */}
      <label className="block mt-6 font-medium">Select Your Device:</label>
      <select
        className="border p-2 w-full mt-1"
        value={deviceType}
        onChange={(e) => {
          setDeviceType(e.target.value);
          setIssueType(""); // Reset issue selection
        }}
      >
        <option value="">-- Choose a Device --</option>
        <option value="Windows">Windows</option>
        <option value="Mac">Mac</option>
      </select>

      {/* Issue Type Dropdown */}
      {deviceType && (
        <>
          <label className="block mt-4 font-medium">Select the Issue:</label>
          <select
            className="border p-2 w-full mt-1"
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
          >
            <option value="">-- Choose an Issue --</option>
            {issues[deviceType].map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Display Solution */}
      {deviceType && issueType && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold">Possible Solution:</h3>
          <p>{solutions[deviceType][issueType]}</p>
        </div>
      )}
    </div>
  );
}










export default async function symptoms() {

  return (
    <>

      <Container className="mt-16">

      <SymptomChecker/>
      </Container>
    </>
  )
}
