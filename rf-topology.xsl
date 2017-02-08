<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>

            </head>
            <body>
                <h1> RF Topology</h1>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="plan">
        <h2>Plan</h2>
        <pre>
            <xsl:apply-templates/>
        </pre>
    </xsl:template>

    <xsl:template match="plan//*">
        <xsl:value-of select="name(.)"/>
        <xsl:apply-templates/>
    </xsl:template>


</xsl:stylesheet>