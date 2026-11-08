// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and thesis supervision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-organization",
          title: "organization",
          description: "Organizing committees, program committees, and session chairing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/organization/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Invited talks, tutorials, and conference presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "Awards and distinctions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Professional experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-pushpin-the-paper-stellar-a-search-based-testing-framework-for-large-language-model-applications-has-been-accepted-for-publication-at-saner-2026",
          title: ':pushpin: The paper STELLAR: A Search-Based Testing Framework for Large Language Model Applications...',
          description: "",
          section: "News",},{id: "news-pushpin-the-paper-simulator-ensembles-for-trustworthy-autonomous-driving-testing-has-been-accepted-for-publication-in-empirical-software-engineering",
          title: ':pushpin: The paper Simulator Ensembles for Trustworthy Autonomous Driving Testing has been accepted...',
          description: "",
          section: "News",},{id: "news-trophy-the-paper-stellar-a-search-based-testing-framework-for-large-language-model-applications-received-the-ieee-computer-society-tcse-distinguished-paper-award-at-saner-2026",
          title: ':trophy: The paper STELLAR: A Search-Based Testing Framework for Large Language Model Applications...',
          description: "",
          section: "News",},{id: "news-pushpin-the-paper-benchmarking-contextual-understanding-for-in-car-conversational-systems-has-been-accepted-for-publication-in-the-journal-of-systems-amp-amp-software",
          title: ':pushpin: The paper Benchmarking Contextual Understanding for In-Car Conversational Systems has been accepted...',
          description: "",
          section: "News",},{id: "news-pushpin-the-paper-automated-evaluation-of-multi-turn-dialogues-in-in-car-conversational-assistants-has-been-accepted-for-publication-at-itsc-2026",
          title: ':pushpin: The paper Automated Evaluation of Multi-Turn Dialogues in In-Car Conversational Assistants has...',
          description: "",
          section: "News",},{id: "news-pushpin-the-paper-search-based-testing-of-vision-language-models-for-in-car-scene-understanding-has-been-accepted-for-publication-at-ase-2026-industry-showcase-track",
          title: ':pushpin: The paper Search-based Testing of Vision Language Models for In-Car Scene Understanding...',
          description: "",
          section: "News",},{id: "news-microphone-i-gave-an-invited-talk-at-the-tarot-summer-school-2026-in-munich-on-testing-validation-and-security-of-ai-enabled-systems",
          title: ':microphone: I gave an invited talk at the TAROT Summer School 2026 in...',
          description: "",
          section: "News",},{id: "news-pushpin-the-paper-simfusion-multi-fidelity-simulation-based-testing-of-automated-driving-systems-has-been-accepted-for-publication-at-icse-2027",
          title: ':pushpin: The paper SimFusion: Multi-Fidelity Simulation-based Testing of Automated Driving Systems has been...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%76.%73%6F%72%6F%6B%69%6E@%74%75%6D.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Leviathan321", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lev-sorokin-a90011190", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
