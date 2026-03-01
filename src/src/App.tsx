import { useState } from 'react';

const characters = ["Vikram (Agent)", "Kalki (Avatar)", "Maya (Sorceress)", "Rudra (Warrior)", "Z-100 (Android)", "Ishaan (Mystic)", "Zara (Pilot)", "Kairo (Drifter)", "Bhairava (Monk)", "Luna (Shadow)", "Neon Oracle", "Cyber Yaksha", "Blade Master", "Soul Reaper", "Time Healer", "Storm Bringer", "Void Walker", "Iron Guard", "The Masked King", "Glitch Soldier", "Old Sage", "Cyber Pet Bolt", "Silent Villager", "Hologram Girl", "The Grinning Man", "Neon Kid", "Lost Robot", "Shadow Beast", "Ethereal Being", "Techno Rebel"];

const concepts = {
  Entertainment: ["AI Superstar Scandal", "Mars Reality Show", "Clone Escape"],
  Horror: ["Grinning Doppelgänger", "Server Room Ghost", "Cursed QR"],
  Mythology: ["Cyberpunk Kalki", "Modern Hanuman", "Lost Astra"],
  Trending: ["Crypto Heist Live", "100-Day AI Challenge", "Deepfake Mystery"]
};

export function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ duration: '', character: '', concept: '' });
  const [customName, setCustomName] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <h1 className="text-3xl font-black text-center text-indigo-500 mb-8 italic uppercase tracking-widest">VORTEX AI CINEMA</h1>
      
      <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-indigo-400">Step 1: Project Duration</h2>
            {["1-minute viral short", "3-5 minute mini film", "10-minute series"].map(d => (
              <button key={d} onClick={() => { setData({...data, duration: d}); setStep(2); }} className="w-full p-4 mb-3 bg-slate-800 rounded-xl hover:border-indigo-500 border border-transparent text-left transition">{d}</button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-indigo-400">Step 2: Select Character</h2>
            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto mb-4 bg-black/40 p-2 rounded-lg">
              {characters.map(c => (
                <button key={c} onClick={() => { setData({...data, character: c}); setStep(4); }} className="p-3 text-[10px] bg-slate-800 rounded-lg hover:bg-indigo-600 transition">{c}</button>
              ))}
            </div>
            <button onClick={() => setStep(3)} className="w-full p-4 border border-pink-500 text-pink-500 rounded-xl font-bold">+ Custom Name</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-pink-500">Enter Hero Name</h2>
            <input type="text" onChange={(e) => setCustomName(e.target.value)} className="w-full p-4 bg-black border border-zinc-700 rounded-xl mb-4 text-white" placeholder="Ex: Rebel Raja" />
            <button onClick={() => { if(customName) { setData({...data, character: customName}); setStep(4); } }} className="w-full bg-indigo-600 p-4 rounded-xl font-bold">CONTINUE</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-indigo-400">Step 3: Concepts for {data.character}</h2>
            {Object.entries(concepts).map(([cat, list]) => (
              <div key={cat} className="mb-4">
                <p className="text-[10px] text-slate-500 font-bold mb-2 uppercase">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {list.map(c => <button key={c} onClick={() => { setData({...data, concept: c}); setStep(5); }} className="bg-slate-800 px-3 py-2 rounded-lg text-xs hover:border-indigo-400 transition">{c}</button>)}
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 5 && (
          <div className="animate-in zoom-in duration-500">
            <h2 className="text-2xl font-black text-white italic mb-4">8K PIXAR SCRIPT</h2>
            <div className="p-4 bg-black/50 border-l-4 border-indigo-500 text-left text-sm space-y-4">
              <p><strong>Visuals:</strong> 8K Ray Tracing, Pixar-style lighting for <strong>{data.character}</strong>.</p>
              <p className="text-cyan-400 text-lg font-bold">Telugu: "చరిత్ర రాసే సత్తా నాది, చూసే ధైర్యం నీదా?"</p>
              <p className="text-xs text-slate-500 italic">Performance: Intense close-up, shadow transitions.</p>
            </div>
            <button onClick={() => setStep(1)} className="mt-8 w-full bg-white text-black font-black p-4 rounded-xl uppercase tracking-widest">New Project</button>
          </div>
        )}
      </div>
    </div>
  );
}
