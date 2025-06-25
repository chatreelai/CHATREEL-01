# ChatReel AI (Classic UI Version)

This is a simple multi-page front-end for ChatReel AI:
- Theme selection → Script → Voice/Screenshot → Background video → Preview/Export
- Uses `localStorage` to pass data
- Classic, minimal UI (white background, black text)

## Files
- `index.html` — Theme selection
- `script.html` — Script input / AI-generate placeholder
- `voice.html` — Voice choice + screenshot upload
- `video.html` — Background video upload / link
- `editor.html` — Preview & Export placeholder
- `style.css` — Simple styling
- `common.js` — Shared helper functions

## How to Host on GitHub Pages

1. Create a new GitHub repo (e.g., `chatreel-ai`).
2. Copy each file (`index.html`, etc.) via GitHub’s “Add file → Create new file”, paste contents.
3. Ensure file structure is flat in root.
4. In repo Settings → Pages → Source: `main` branch, folder `/ (root)`, Save.
5. Wait ~30–60s. Site will be live at:
   `https://<your-username>.github.io/chatreel-ai/`

## Next Steps & Integration

- **AI Script Generation**: In `script.html`, replace placeholder in `genBtn` handler with real API call to your chosen LLM.
- **ElevenLabs Voice**: In `voice.html`, inside `genVoiceBtn` handler, call ElevenLabs API using fetch/Axios and your API key; store resulting audio URL or blob.
- **Screenshot Generation**: Either upload your own screenshots or integrate a fake-screenshot API; store file references.
- **Background Video**: For local preview, use FileReader or backend upload; for YouTube links, call a server-side service to fetch/trim.
- **Final Assembly**: You need a backend or client-side library to stitch audio + images + video into a combined MP4/WebM. Placeholder alerts indicate where to plug in.
- **Download/Export**: After assembly, provide a link or blob download.
- **Styling**: You can adjust `style.css` further; this is a minimal classic look.

## Notes
- All data is passed via `localStorage`. For large files (audio/video), implement a backend or use IndexedDB.
- This version focuses on structure and classic UI flow.
- For full AI-powered generation, you’ll need server-side or advanced client libs.
