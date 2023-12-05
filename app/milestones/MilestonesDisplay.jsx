async function getMilestones() {
  const response = await fetch(
    "https://travel-data-l747.onrender.com/milestones"
  );

  const milestones = await response.json();
  console.log(milestones);
  return milestones;
}

export default async function MilestonesDisplay() {
  const milestones = await getMilestones();
  return (
    <main>
      <div>
        {milestones.map((milestone) => (
          <div key={milestone.id}>
            <div id="display-section">
              <h1 className="rounded-lg border-2 border-black border-solid shadow-2xl">
                Milestone {milestone.id}
              </h1>
              <p>{milestone.title}</p>
              <p>{milestone.description}</p>
              <p>{new Date(milestone.deadline).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
