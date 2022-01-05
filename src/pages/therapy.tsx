import dynamic from 'next/dynamic'
import Button from '../components/Button'
import Faq from '../components/Faq'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectionheader from '../components/Sectionheader'
import Sectiontext from '../components/Sectiontext'
import Lazysections from '../libs/utils/lazysections'
import Twitter from '../components/Twitter'

const VideoPlayer = dynamic(() => import('../components/videoplayer'), { ssr: false })

const faqs = [
  {
    question: 'Who can apply?',
    answer:
      'Our programs are open to all people, of all ages, across all nations. For those presently unable to afford mental health care, we will work with you to verify financial hardship and get you started.',
  },
  {
    question: 'How much is therapy?',
    answer:
      "For those looking at our therapist finder, you'll want to budget at least $50 per week. Anyone unable to afford $50 per week will instead have the cost covered by RAD. For reference, the average cost of therapy is $120 a session, with most people going to therapy once per week.",
  },
  {
    question: 'Does RAD cover residential treatment?',
    answer:
      "We don't presently offer coverage for residential treatment. Our team is working towards covering residential treatment in the future.",
  },
  {
    question: 'How many sessions will RAD cover?',
    answer:
      "There is no limit to therapy sessions we will cover. Our social workers will help to establish goals for therapy and stay with you until you're in a place where you can comfortable take over payment. For reference, the average time spent in our program is 6 months. 26 therapy sessions.",
  },
  {
    question: 'What does RAD cover?',
    answer:
      'Our team covers any approach to therapy that is backed by empirical evidence; including most commonly practiced forms of psychotherapy. RAD also covers medication, including general psychopharmaceuticals and psychedelic medicine *where legal and under the guidance of qualified professionals.',
  },
  {
    question: 'What may not be covered?',
    answer:
      'At present, those experiencing houselessness, seeking court mandated care, or court evaluations will be referred to organizations better equipped for such.',
  },
]

export default function Therapy() {
  return (
    <Layout
      pageTitle="RAD Thearpy"
      description="Start therapy with Rise Above The Disorder. We're here to find you the best possible therapist and make sure you're well equipped to heal."
      pageLink="/therapy"
      pageHeader={
        <section>
          <Pageheader
            subheader="Start Therapy"
            headerone="You deserve to feel well"
            charone="&amp;"
            headertwo="You are worth it"
            chartwo="&amp;"
            headerthree="You are rad"
            charthree="♡"
          />
        </section>
      }
    >
      <div className="bg-gray-50">
        <section className="pt-16 space-y-16 lg:pt-32">
          <Sectionheader
            color="text-black"
            subheader="The Process"
            headerone="Ready to start therapy?"
            headertwo="You're just two steps away"
          />
          <Lazysections>
            <Sectiontext
              subheader="Step 1: The Form"
              headerone="We're here to help."
              headertwo="Tell us what you're experiencing."
              body="The intake form is a place for you to share more about how you're feeling. There is one form for both those seeking support finding a great therapist in budget or on their healthcare plan, and those seeking the same but presently without the means to afford therapy."
              media={
                <div className="lazy-div">
                  <Twitter
                    text="ok.
if you are seeking help but don't want to go from therapist to therapist trying to find the right one... go through @YouAreRAD I found my current therapist through them and honestly I could not be happier? This therapist actually listens and gets me. We CLICKED. thats HUGE."
                    id="1420166020250042369"
                    name="𓆩 Summer 𓆪"
                    author="@trubloop"
                    created_at="4:35 PM · Jul 27, 2021"
                    likes="28"
                    retweets="8"
                    comments="3"
                    media="https://pbs.twimg.com/profile_images/1450208710781915136/2tYL5wj__400x400.jpg"
                  />
                </div>
              }
            />
          </Lazysections>
          <Lazysections>
            <div className="lazy-div">
              <Sectiontext
                alternate={false}
                subheader="Step 2: Your Social Worker"
                headerone="The path forward can seem unclear. "
                headertwo="Let's map it out together."
                body="Everyone's journey is unique- that's why our social workers like to work with you directly to best understand how we can help. We'll explore therapy and discuss any other resources that could be useful."
                media={<VideoPlayer publicId="General%20Media/therapistfinder" />}
              />
            </div>
            <Button linkTo="https://intakeq.com/new/KT5Fej/ttVScO">Start Therapy</Button>
            <p>The clinical team at RAD will be on holiday from Dec, 20th to Jan, 3rd.</p>
          </Lazysections>
        </section>
      </div>
      <div className="text-white bg-black">
        <section>
          <Faq faqs={faqs} />
        </section>
      </div>
    </Layout>
  )
}
