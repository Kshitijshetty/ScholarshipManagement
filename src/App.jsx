import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import NextActionCard from "./components/NextActionCard";
import StatCard from "./components/StatCard";
import ScholarshipCard from "./components/ScholarshipCard";
import DeadlineList from "./components/DeadlineList";
import ReadinessChecklist from "./components/ReadinessChecklist";
import UploadTranscriptModal from "./components/UploadTranscriptModal";
import ApplicationModal from "./components/ApplicationModal";
import { ChecklistIcon, SearchSparkleIcon, CheckDocumentIcon, TrophyIcon, ClockIcon } from "./components/icons";
import { student, statCards, scholarships, deadlines, readinessChecklist } from "./data";

const statCardIcons = {
  checklist: ChecklistIcon,
  search: SearchSparkleIcon,
  "check-document": CheckDocumentIcon,
  trophy: TrophyIcon,
  clock: ClockIcon,
};

function App() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [transcriptUploaded, setTranscriptUploaded] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handlePrimaryAction = (scholarship) => {
    if (scholarship.id !== "stem-leadership") return;
    const action = scholarship.actionPanel.primaryAction;
    if (action === "Upload transcript") setUploadOpen(true);
    else setApplicationModalOpen(true);
  };

  const scrollToQueue = () =>
    document.getElementById("needs-attention")?.scrollIntoView({ behavior: "smooth" });

  const scrollToDeadlines = () =>
    document.getElementById("deadlines")?.scrollIntoView({ behavior: "smooth" });

  const displayScholarships = scholarships.map((scholarship) => {
    if (scholarship.id !== "stem-leadership") return scholarship;

    if (applicationSubmitted) {
      return {
        ...scholarship,
        status: "Submitted",
        progress: 100,
        priority: "ready",
        requirements: [
          { label: "Essay", status: "Complete" },
          { label: "Transcript", status: "Uploaded" },
        ],
        actionPanel: {
          ...scholarship.actionPanel,
          badge: "Submitted",
          task: "Application submitted",
          description: "Your application is now under review.",
          primaryAction: "View application",
          secondaryAction: "",
        },
      };
    }

    if (transcriptUploaded) {
      return {
        ...scholarship,
        status: "Ready to submit",
        progress: 100,
        priority: "ready",
        requirements: [
          { label: "Essay", status: "Complete" },
          { label: "Transcript", status: "Uploaded" },
        ],
        actionPanel: {
          ...scholarship.actionPanel,
          badge: "Ready",
          task: "Review and submit",
          description: "All required materials are complete.",
          primaryAction: "Review & submit",
        },
      };
    }

    return scholarship;
  });

  return (
    <div className="min-h-screen bg-page p-6">
      <div className="mx-auto flex max-w-[1440px] gap-6">
        <Sidebar student={student} />

        <main className="min-w-0 flex-1 rounded-[18px] border border-border bg-surface p-8 lg:p-9">
          <DashboardHeader student={student} />

          {!transcriptUploaded && (
            <div className="mt-7">
              <NextActionCard
                onUpload={() => setUploadOpen(true)}
                onViewApplications={scrollToQueue}
              />
            </div>
          )}

          <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {statCards.map((card) => (
              <StatCard
                key={card.id}
                icon={statCardIcons[card.icon]}
                label={card.label}
                metric={card.metric}
                supportingLabel={card.supportingLabel}
                helperText={card.helperText}
                buttonLabel={card.buttonLabel}
                onButtonClick={
                  card.id === "awards"
                    ? (e) => e.preventDefault()
                    : card.id === "due-soon"
                      ? scrollToDeadlines
                      : scrollToQueue
                }
              />
            ))}
          </div>

          <section id="needs-attention" className="mt-9">
            <h2 className="text-[16px] font-bold text-ink">Needs your attention</h2>
            <p className="mt-1 text-[13px] text-ink-soft">
              Prioritized by deadline and what&rsquo;s blocking submission.
            </p>

            <div className="mt-4 flex flex-col gap-5">
              {displayScholarships.map((scholarship) => (
                <ScholarshipCard
                  key={scholarship.id}
                  scholarship={scholarship}
                  onPrimaryAction={() => handlePrimaryAction(scholarship)}
                  onSecondaryAction={
                    scholarship.id === "stem-leadership" ? () => setApplicationModalOpen(true) : undefined
                  }
                />
              ))}
            </div>
          </section>

          <div id="deadlines" className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <DeadlineList deadlines={deadlines} />
            <ReadinessChecklist items={readinessChecklist} />
          </div>

          <footer className="mt-10 border-t border-border pt-5 pb-1 text-center text-[12px] text-ink-faint">
            Scholarship Dashboard &middot; a calmer way to keep up with deadlines
          </footer>
        </main>
      </div>

      <UploadTranscriptModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onUpload={() => setTranscriptUploaded(true)}
      />
      <ApplicationModal
        open={applicationModalOpen}
        onClose={() => setApplicationModalOpen(false)}
        transcriptUploaded={transcriptUploaded}
        onUploadTranscript={() => setTranscriptUploaded(true)}
        submitted={applicationSubmitted}
        onSubmitted={() => setApplicationSubmitted(true)}
      />
    </div>
  );
}

export default App;
