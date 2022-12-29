import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <script
          async
          data-name="BMC-Widget"
          data-cfasync="true"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="riccoxie"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#BD5FFF"
          data-position="Right"
          data-x_margin="20"
          data-y_margin="20"
        ></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// noinspection JSUnusedGlobalSymbols
export default MyDocument;
