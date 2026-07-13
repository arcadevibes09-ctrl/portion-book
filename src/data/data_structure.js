export const courseStructure = {
  pharmacology: {
    title: "PHARMACOLOGY & DRUG ADMINISTRATION",
    systems: {
      intro_and_gi: {
        title: "Introduction, GI & Respiratory",
        topics: [
          { id: "pharm_intro_principles", title: "Intro to Pharmacology & Pharmacokinetics" },
          { id: "pharm_gastrointestinal", title: "Pharmacology of GI (Antacids, PPIs, Antiemetics)" },
          { id: "pharm_respiratory", title: "Pharmacology of Respiratory (Bronchodilators, Corticosteroids)" }
        ]
      },
      cns_drugs: {
        title: "Neuro & Psychopharmacology",
        topics: [
          { id: "pharm_cns_analgesics", title: "Analgesics, NSAIDs & Anesthetics" },
          { id: "pharm_cns_psychotropics", title: "Antipsychotics, Antidepressants & Mood Stabilizers" },
          { id: "pharm_neuro_misc", title: "Stimulants, Alcohol & Poisoning Antidotes" }
        ]
      },
      systemic_drugs: {
        title: "Cardiovascular, Endocrine & Renal",
        topics: [
          { id: "pharm_cardio_blood", title: "Cardiovascular (Beta-Blockers) & Blood Thinners" },
          { id: "pharm_endocrine_thyroid", title: "Endocrine (Thyroid, Insulin, Oral Hypoglycemics)" },
          { id: "pharm_renal_diuretics", title: "Renal Pharmacology & Diuretics" },
          { id: "pharm_repro_hormones", title: "Reproductive Hormones & Tocolytics" }
        ]
      },
      special_infections: {
        title: "Chemotherapy, Skin & Infections",
        topics: [
          { id: "pharm_onco_immuno", title: "Chemotherapy, Antineoplastics & Immunosuppressants" },
          { id: "pharm_skin_antiseptics", title: "Antiseptics, Disinfectants & Topical Steroids" },
          { id: "pharm_infections_parasites", title: "Antibiotics, Anthelmintics & Antimalarials" }
        ]
      }
    }
  },
  foundations: {
    title: "PROFESSIONAL FOUNDATIONS & SPECIALIZED MODULES",
    systems: {
      genetics_geriatrics: {
        title: "Genetics & Geriatrics",
        topics: [
          { id: "found_genetics_basics", title: "Genetics, Mitosis/Meiosis & Teratogens" },
          { id: "found_geriatrics", title: "Geriatrics, Aging Physiology & Polypharmacy" }
        ]
      },
      ethics_pathology: {
        title: "Professionalism, Ethics & Pathology",
        topics: [
          { id: "found_prof_nursing_roles", title: "Regulatory Bodies (INC) & Prescribing Roles" },
          { id: "found_ethics_end_of_life", title: "Ethics, Euthanasia & Patients Bill of Rights" },
          { id: "found_path_lab", title: "Clinical Pathology: CSF, Sputum & Occult Blood" }
        ]
      }
    }
  }
};
