export default function ProjectsPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    <strong>Ticket Management System</strong> – A MERN stack app for tracking and resolving issues efficiently.
                </li>
                <li>
                    <strong>Ethereum Staking Tool</strong> – Integrated Ethereum APIs for staking and monitoring on Foundry platform.
                </li>
                <li>
                    <strong>MailMind</strong> – A Next.js app that classifies and masks PII in emails using a custom ML model.
                </li>
                {/* Add more projects here as needed */}
            </ul>
        </div>
    );
}
