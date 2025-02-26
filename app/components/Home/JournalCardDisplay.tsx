import JournalCard from '../Misc/JournalCard';

export default function JournalCardDisplay() {
  const journalCardInfo = [
    {
      date: '12/6/24',
      title: 'MOVING THROUGH CITIES',
      image:
        'https://framerusercontent.com/images/pRSF3ie9u29K42AIkVizUhtPFos.jpg',
    },
    {
      date: '12/6/24',
      title: 'NIGHT SHIFT',
      image:
        'https://framerusercontent.com/images/4YS2erneoVBUDXp66O2uwDvjjaE.jpg',
    },
    {
      date: '12/6/24',
      title: 'THE WEIGHT OF PURPOSE',
      image:
        'https://framerusercontent.com/images/FG2LWwzL6LUQPimvaWtxuUHJg.jpg',
    },
  ];
  return (
    <div className="min-h-[49vh] flex gap-2 flex-col md:flex-row">
      <JournalCard journalCardInfo={journalCardInfo[0]} />
      <JournalCard journalCardInfo={journalCardInfo[1]} />
      <JournalCard journalCardInfo={journalCardInfo[2]} />
    </div>
  );
}
