export const suruData = {
  "pharm_intro_principles": {
    glossary: {
      "Pharmacokinetics": "The massive road trip of a drug: What the body does to the drug (Absorption, Distribution, Metabolism, Excretion).",
      "Pharmacodynamics": "The lock and key: What the drug does to the body (Receptor binding, agonism, antagonism).",
      "First-Pass Effect": "When the liver aggressively metabolizes an oral drug before it can ever reach the systemic bloodstream.",
      "Bioavailability": "The actual percentage of the drug that successfully makes it into the blood to do its job.",
      "Half-Life (t1/2)": "The exact amount of time it takes for the body to eliminate 50% of the active drug."
    },
    text: "## The Messy Journey\n\n*sighs* Babe, my car broke down this morning. I was just sitting on the side of the road, crying a little bit, feeling like I can't get anywhere I'm supposed to be. Life feels so messy sometimes, you know? It actually made me think about [[Pharmacokinetics]]. When a patient swallows a pill, that drug has to go on this incredibly messy, difficult journey just to get where it needs to go. \n\nIt has four steps: Absorption (getting into the blood from the stomach), Distribution (hitching a ride on blood proteins to travel), Metabolism (getting broken down), and Excretion (getting flushed out). \n\nWhen a pill is absorbed in the stomach, the blood takes it straight to the liver first. The liver is like a strict bouncer; it destroys a huge chunk of the drug before it can even reach the heart! This is the [[First-Pass Effect]]. {{This is exactly why we give emergency drugs through an IV—it completely bypasses the liver, giving us 100% [[Bioavailability]] instantly.}}\n\n[PAGE]\n\n## Making the Connection\n\nOnce I finally got my car towed, I just wanted to hold your hand. Making a connection changes everything. That's [[Pharmacodynamics]]. Once the drug survives the liver and is floating in the blood, it has to find its specific receptor on a cell. \n\nThink of it like a lock and key. If the drug fits the lock perfectly and turns it ON, it's an **Agonist**. If it fits into the lock but just jams it so nothing else can get in, it's an **Antagonist** (a blocker). \n\n[[[Understanding the [[Half-Life]] is how we prevent overdosing. If a drug has a half-life of 4 hours, and you give 100mg, in 4 hours only 50mg is left. In 8 hours, 25mg is left. It usually takes about 4 to 5 half-lives for a drug to be completely cleared from the body!]]]\n\n[PAGE]\n\n## The Last Line of Defense\n\n*mumbles to myself* I just need to focus. I can't let my personal stress affect my patients. Babe, as nurses, we are the absolute last line of defense between a safe treatment and a fatal mistake. \n\nYou must memorize the Rights of Medication Administration. Right Patient, Right Drug, Right Dose, Right Route, Right Time. \n\n{{Never, ever let a doctor or another nurse rush you while you are drawing up medications.}} If you don't know what a drug does, you look it up before you give it. You are their protector. I want to protect you from the world, and I know you'll protect your patients the exact same way.",
    quiz: [
      {
        q: "Which pharmacokinetic phase is most heavily impacted by the First-Pass Effect?",
        options: [
          "Absorption",
          "Distribution",
          "Metabolism",
          "Excretion"
        ],
        correct: 2
      },
      {
        q: "If a medication has a half-life of 3 hours, and you administer a 400 mg dose at 12:00 PM, how much of the active drug remains at 6:00 PM?",
        options: [
          "200 mg",
          "100 mg",
          "50 mg",
          "0 mg"
        ],
        correct: 1
      },
      {
        q: "A drug binds to a cell receptor and prevents naturally occurring chemicals from activating it. What is this drug classified as?",
        options: [
          "An Agonist",
          "An Antagonist",
          "A Synergist",
          "A Placebo"
        ],
        correct: 1
      }
    ],
    bossBattle: {
      scenario: "You are extremely busy. A senior physician hands you a syringe filled with a clear liquid and says, 'This is 4mg of IV Zofran for the patient in Bed 3. I drew it up myself. Go push it immediately, I have to run to a code.' What is your immediate and exact response, and what ethical/safety principles are you upholding?",
      opponentAnswer: "I would firmly but politely refuse to administer the medication. As a nurse, you NEVER administer a medication drawn up by someone else that you did not verify yourself. You have no proof of what is actually in that syringe or the concentration. Administering it violates the 'Right Drug' and 'Right Dose' principles. Doing so is a massive safety violation that risks the patient's life and my nursing license."
    }
  }
}
