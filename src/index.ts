import { ponder } from '@/generated'

ponder.on('ExampleContract:VoteCast', async ({ event, context }) => {
  const { Votes } = context.db

  await Votes.create({
    id: event.transaction.hash,
    data: event.args,
  })
})
