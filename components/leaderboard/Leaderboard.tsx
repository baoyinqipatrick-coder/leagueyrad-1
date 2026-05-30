export default function Leaderboard() {
  const users = [
    { username: 'PACKGOD', value: '$125,000' },
    { username: 'RIPKING99', value: '$88,400' },
    { username: 'LUFFYHUNTER', value: '$52,900' },
    { username: 'COURTSIDEPULL', value: '$41,200' }
  ];

  return (
    <div className="rounded-[34px] border border-zinc-800 bg-zinc-950/85 p-7 backdrop-blur-xl">
      <h2 className="mb-6 text-3xl font-black">GLOBAL LEADERBOARD</h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={user.username} className="flex items-center justify-between rounded-2xl border border-zinc-900 bg-black/60 p-4">
            <div className="font-bold text-zinc-300">#{index + 1} {user.username}</div>
            <div className="font-black text-yellow-400">{user.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
