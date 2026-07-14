export const courseStructure = {
  pharmacology: {
    title: "PHARMACOLOGY",
    systems: {
      intro_and_gi: {
        title: "Intro, GI & Resp",
        topics: [
          { id: "pharm_intro_principles", title: "Pharmacokinetics Intro" },
          { id: "pharm_gastrointestinal", title: "GI Drugs (Antacids, PPIs)" },
          { id: "pharm_respiratory", title: "Resp. Drugs (Bronchodilators)" }
        ]
      },
      cns_drugs: {
        title: "Neuro & Psych",
        topics: [
          { id: "pharm_cns_analgesics", title: "Analgesics & Anesthetics" },
          { id: "pharm_cns_psychotropics", title: "Psychotropics & Mood Stabilizers" },
          { id: "pharm_neuro_misc", title: "Stimulants & Antidotes" }
        ]
      },
      systemic_drugs: {
        title: "Cardio, Endo & Renal",
        topics: [
          { id: "pharm_cardio_blood", title: "Cardio Drugs & Blood Thinners" },
          { id: "pharm_endocrine_thyroid", title: "Endocrine & Diabetes" },
          { id: "pharm_renal_diuretics", title: "Renal & Diuretics" },
          { id: "pharm_repro_hormones", title: "Reproductive & Tocolytics" }
        ]
      },
      special_infections: {
        title: "Chemo, Skin & ID",
        topics: [
          { id: "pharm_onco_immuno", title: "Chemotherapy & Immunosuppressants" },
          { id: "pharm_skin_antiseptics", title: "Antiseptics & Topicals" },
          { id: "pharm_infections_parasites", title: "Antibiotics & Antimicrobials" }
        ]
      }
    }
  },
  foundations: {
    title: "FOUNDATIONS & ETHICS",
    systems: {
      genetics_geriatrics: {
        title: "Genetics & Geriatrics",
        topics: [
          { id: "found_genetics_basics", title: "Genetics & Teratogens" },
          { id: "found_geriatrics", title: "Geriatrics & Polypharmacy" }
        ]
      },
      ethics_pathology: {
        title: "Ethics & Pathology",
        topics: [
          { id: "found_prof_nursing_roles", title: "Regulations & Prescribing" },
          { id: "found_ethics_end_of_life", title: "Ethics & Patient Rights" },
          { id: "found_path_lab", title: "Clinical Pathology" }
        ]
      }
    }
  }
};
