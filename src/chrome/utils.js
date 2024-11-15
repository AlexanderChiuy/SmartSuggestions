let session;

// Run Gemini prompt API
export async function runPrompt(prompt, params) {
  try {
    if (!session) {
      session = await window.ai.languageModel.create(params);
    }
    return session.prompt(prompt);
  } catch (e) {
    console.log('Prompt failed');
    console.error(e);
    console.log('Prompt:', prompt);
    // Reset session
    reset();
    throw e;
  }
}

async function reset() {
  if (session) {
    session.destroy();
  }
  session = null;
}

// Grab current tab url
export async function getTabURL() {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  console.log(tab)
  return tab;
}

export async function getTitle() {
  return chrome.storage.sync.get(["title"])
}
