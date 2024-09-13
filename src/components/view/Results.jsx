import React from 'react'
import Select from '../shared/components/select/Select'
import Input from '../shared/components/inputs/text/Text'
import Typography from '../shared/components/typography/Typography'
import Accordion from '../shared/components/accordion/Accordion'
import './Results.scss'

const Results = () => {

  const sampleItems2 = [
    {
      key: '1',
      label: 'Reference',
      children: [
        {
          name: 'test',
          content: (
            <div>testing</div>
          )
        }
      ]
    },
    {
      key: '2',
      label: 'Company Profile',
      children: [
        {
          name: 'Name',
          content: (
            <div>Redis</div>
          )
        },
        {
          name: 'Domain',
          content: (
            <div>redis.io</div>
          )
        },
        {
          name: 'Industry',
          content: (
            <div>Database Management</div>
          )
        },
        {
          name: 'Founded Date',
          content: (
            <div></div>
          )
        },
        {
          name: 'Headquarters',
          content: (
            <div></div>
          )
        },
        {
          name: 'Mission Statement',
          content: (
            <div>Spend more time building</div>
          )
        },
        {
          name: 'Vision Statement',
          content: (
            <div></div>
          )
        }, 
        {
          name: 'Overview',
          content: (
            <div>Redis is a real-time data platform designed to help developers build blazing fast applications with accessible, enterprise-grade caching.</div>
          )
        },
        {
          name: 'Products Services',
          content: (
            <div>
              <ul >
                <li>Community Edition</li>
                <li>Redis Cloud</li>
                <li>Redis Software</li>
              </ul>
            </div>
          )
        },
        {
          name: 'Future Goals',
          content: (
            <div>2024-08-23</div>
          )
        }
      ]
    }
  ]


  const sampleItems = [
    {
      key: '1',
      label: 'Pitch',
      children: [
        {
          name: "Reasoning",
          content: (
            <>
              <div>
                This pitch effectively capitalizes on Redis's recent major update with Redis 8, focusing on their strategic goals for speed and performance enhancements.
                It positions Bounti AI’s sales development services as the ideal solution to help Redis maximize the potential of these updates, emphasizing the urgency
                of adopting effective AI communication strategies at this critical moment. The pitch references successful case studies that illustrate Bounti AI's
                capabilities, reinforcing the relevance and urgency of our services to Redis’s current needs.
              </div>
            </>
          ),
        },
        {
          name: "Score",
          content: (
            <div>9</div>
          ),
        },
        {
          name: "Title",
          content: <div>Redis 8 Update Creates Strategic Opportunities</div>,
        },
        {
          name: "Description",
          content: (
          <>
              <div>
                <div>Why?</div>
                <div>
                  Redis has just launched Redis 8, a comprehensive update aimed at enhancing speed and performance in data management and caching.
                  This monumental upgrade places Redis in a strong position to significantly improve its market presence, aligning with the current demand for
                  rapid, efficient development solutions.
                </div>
                <div>Why now</div>
                <div> With the introduction of Redis 8, there is a pressing need for Redis to effectively leverage these enhancements to maximize their potential impact on customers. Now is the ideal time for Redis to adopt strategic AI-based sales development services that can communicate the benefits of these upgrades effectively and address any transitioning challenges they may face as they implement new features.</div>

                <div>Why us?</div>
                <div>
                  Bounti AI specializes in tailoring AI sales development services specifically for organizations undergoing significant updates like Redis. Our expertise in AI-driven communication strategies can help Redis articulate the advantages of Redis 8 to their clients, ultimately driving sales and customer satisfaction. For instance, previous collaborations have shown that leveraging AI can streamline messaging and improve customer engagement, as demonstrated in our work with other tech companies that saw a 30% increase in conversion rates post-implementation. We are well-positioned to support Redis during this pivotal moment.
                </div>
              </div>
             
          </>
          ),
        },
        {
          name: "Sources",
          content: (
            <Accordion items={sampleItems2} type='subset' />
          ),
        },
      ],

      title: "Redis 8 Update Creates Strategic Opportunities",
      created: "2 hours ago",
    },
    {
      key: '2',
      label: 'Reference',
      children: [
        {
          name: "Reasoning",
          content: (
            <>
              <div>
                This pitch effectively capitalizes on Redis's recent major update with Redis 8, focusing on their strategic goals for speed and performance enhancements.
                It positions Bounti AI’s sales development services as the ideal solution to help Redis maximize the potential of these updates, emphasizing the urgency
                of adopting effective AI communication strategies at this critical moment. The pitch references successful case studies that illustrate Bounti AI's
                capabilities, reinforcing the relevance and urgency of our services to Redis’s current needs.
              </div>
            </>
          ),
        },
        {
          name: "Score",
          content: (
            <div>9</div>
          ),
        },
        {
          name: "Title",
          content: <div>Redis 8 Update Creates Strategic Opportunities</div>,
        },
        {
          name: "Description",
          content: (
            <div>
              Redis has just launched Redis 8, a comprehensive update aimed at enhancing speed and performance in data management and caching.
              This monumental upgrade places Redis in a strong position to significantly improve its market presence, aligning with the current demand for
              rapid, efficient development solutions.
            </div>
          ),
        },
      ],

      title: "Redis 8 Update Creates Strategic Opportunities",
      created: "2 hours ago",
    },
    {
      key: '3',
      label: 'Company Profile',
      children: [
        {
          name: "Reasoning",
          content: (
            <>
              <div>
                This pitch effectively capitalizes on Redis's recent major update with Redis 8, focusing on their strategic goals for speed and performance enhancements.
                It positions Bounti AI’s sales development services as the ideal solution to help Redis maximize the potential of these updates, emphasizing the urgency
                of adopting effective AI communication strategies at this critical moment. The pitch references successful case studies that illustrate Bounti AI's
                capabilities, reinforcing the relevance and urgency of our services to Redis’s current needs.
              </div>
            </>
          ),
        },
        {
          name: "Score",
          content: (
            <div>9</div>
          ),
        },
        {
          name: "Title",
          content: <div>Redis 8 Update Creates Strategic Opportunities</div>,
        },
        {
          name: "Description",
          content: (
            <div>
              Redis has just launched Redis 8, a comprehensive update aimed at enhancing speed and performance in data management and caching.
              This monumental upgrade places Redis in a strong position to significantly improve its market presence, aligning with the current demand for
              rapid, efficient development solutions.
            </div>
          ),
        },
      ],

      title: "Redis 8 Update Creates Strategic Opportunities",
      created: "2 hours ago",
    },
    {
      key: '4',
      label: 'Opportunities',
      children: [
        {
          name: "Reasoning",
          content: (
            <>
              <div>
                This pitch effectively capitalizes on Redis's recent major update with Redis 8, focusing on their strategic goals for speed and performance enhancements.
                It positions Bounti AI’s sales development services as the ideal solution to help Redis maximize the potential of these updates, emphasizing the urgency
                of adopting effective AI communication strategies at this critical moment. The pitch references successful case studies that illustrate Bounti AI's
                capabilities, reinforcing the relevance and urgency of our services to Redis’s current needs.
              </div>
            </>
          ),
        },
        {
          name: "Score",
          content: (
            <div>9</div>
          ),
        },
        {
          name: "Title",
          content: <div>Redis 8 Update Creates Strategic Opportunities</div>,
        },
        {
          name: "Description",
          content: (
            <div>
              Redis has just launched Redis 8, a comprehensive update aimed at enhancing speed and performance in data management and caching.
              This monumental upgrade places Redis in a strong position to significantly improve its market presence, aligning with the current demand for
              rapid, efficient development solutions.
            </div>
          ),
        },
      ],

      title: "Redis 8 Update Creates Strategic Opportunities",
      created: "2 hours ago",
    },
  ];


  return (
    <div>
      <Typography type={'section-header'}>Results</Typography>
      <br />
      <div className="controls">
        <Input type="text" placeholder="Search" size="large" />
        <div className="filters">
          <Select
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            disabled={false}
            defaultValue={{ value: '', label: 'Filter By' }}
            type='multi'
          />
          <Select
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            disabled={false}
            defaultValue={{ value: '', label: 'Sort By' }}
          />
        </div>
      </div>
      <br />
      <Accordion items={sampleItems} />
    </div>
  );
};

export default Results;
