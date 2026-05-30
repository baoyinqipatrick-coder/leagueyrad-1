import BottomNav from '@/components/mobile/BottomNav';
import Leaderboard from '@/components/leaderboard/Leaderboard';

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-8 text-white md:px-10">
      <a href="/" className="text-yellow-400">← Back</a>
      <h1 className="mt-8 text-5xl font-black">LEADERBOARD</h1>
      <div className="mt-10 max-w-3xl"><Leaderboard /></div>
      <BottomNav />
    </main>
  );
}
