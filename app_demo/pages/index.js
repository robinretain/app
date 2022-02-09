import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0602/1500/1322/files/VinylSale2021.png';

// Sets the state for the resource picker
class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Choose vinyl',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker // Resource picker component
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState // Empty state component
            heading="Discount your vinyl for end of season sale"
            action={{
              content: 'Choose vinyl',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products to change their price.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
handleSelection = (resources) => {
  this.setState({ open: false });
  console.log(resources);
};
}

export default Index;
